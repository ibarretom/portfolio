import { useCallback, useMemo } from "react";
import ReactGA from "react-ga4";

export function useAnalytics() {
  const isDev = useMemo(() => import.meta.env.NODE_ENV === "development", []);
  const id = useMemo(() => import.meta.env.REACT_APP_GA as string | undefined, []);

  const safeTrigger = useCallback(
    function safeTrigger<T extends Event>(GaEvent: (obj: T) => void, param: T) {
      console.log("rendering", param);
      if (id && !isDev) {
        GaEvent(param);
      }

      return;
    },
    [id, isDev]
  );

  const pageView = useCallback(
    (obj: PageView) => {
      safeTrigger(ReactGA.send, obj);
    },
    [safeTrigger]
  );

  const sendCustomEvent = useCallback(
    (obj: CustomEvent) => {
      safeTrigger(ReactGA.event, obj);
    },
    [safeTrigger]
  );

  return {
    initialize: () => {
      if (id && !isDev) {
        ReactGA.initialize(id);
      }
    },
    pageView: useCallback(
      (obj: PageView) => safeTrigger(pageView, obj),
      [safeTrigger, pageView]
    ),
    customEvent: useCallback(
      (obj: CustomEvent) => safeTrigger(sendCustomEvent, obj),
      [safeTrigger, sendCustomEvent]
    ),
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
