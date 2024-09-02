import ReactGA from "react-ga4";

export function useAnalytics() {
  const isDev = process.env.NODE_ENV === "development";
  const id = process.env.REACT_APP_GA as string | undefined;

  function safeTrigger<T extends Event>(GaEvent: (obj: T) => void, param: T) {
    debugger;
    if (id && !isDev) {
      GaEvent(param);
    }

    return;
  }

  const pageView = (obj: PageView) => {
    safeTrigger(ReactGA.send, obj);
  };

  const sendCustomEvent = (obj: CustomEvent) => {
    safeTrigger(ReactGA.send, obj);
  };

  return {
    initialize: () => {
      if (id && !isDev) {
        ReactGA.initialize(id);
      }
    },
    pageView: (obj: PageView) => safeTrigger(pageView, obj),
    customEvent: (obj: CustomEvent) => safeTrigger(sendCustomEvent, obj),
  };
}

abstract class Event {}

export class PageView extends Event {
  constructor(
    private _hitType: string,
    private _page: string,
    private _title: string
  ) {
    super();
    this._hitType = _hitType;
    this._page = _page;
    this._title = _title;
  }

  get hitType() {
    return this._hitType;
  }

  get page() {
    return this._page;
  }

  get title() {
    return this._title;
  }
}

abstract class CustomEvent extends Event {
  constructor(
    private readonly _category: string,
    private readonly _action: string,
    private readonly _label: string
  ) {
    super();
    this._category = _category;
    this._action = _action;
    this._label = _label;
  }

  get category() {
    return this._category;
  }

  get action() {
    return this._action;
  }

  get label() {
    return this._label;
  }
}

export class ClickAbout extends CustomEvent {
  constructor() {
    super("Navigation", "click", "About");
  }
}
