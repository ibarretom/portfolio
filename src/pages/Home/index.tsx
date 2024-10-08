import styles from "./styles.module.css";
import defs from "../../index.module.css";
import { useEffect, useMemo } from "react";

import { SideGrid } from "./sideGrid";
import {
  ClickAbout,
  PageView,
  useAnalytics,
} from "../../hooks/GoogleAnalytics";

export function Home() {
  const cta = {
    title: "Writing code, building ideas",
  };

  const { customEvent, pageView } = useAnalytics();
  const page = useMemo(() => new PageView("pageview", "/", "Home"), []);

  useEffect(() => {
    pageView(page);
  }, [page, pageView]);

  const handleAboutClick = () => {
    customEvent(new ClickAbout());
  };
  return (
    <section className={`${defs.grid} ${defs["full-screen"]}`}>
      <main
        className={`${styles.cta}`}
        style={
          {
            "--typewriterCharacters": cta.title.length,
          } as React.CSSProperties
        }
      >
        <h1
          className={`${styles["cta__title"]} ${defs["font-huge"]} ${defs["font-cheltenham"]} ${defs["mb-2"]} ${defs["mt-0"]} ${styles["type-animation"]}`}
        >
          {cta.title}
        </h1>
        <p
          className={`${styles["cta__subtitle"]} ${defs["font-large"]} ${defs["light-text"]} ${defs["mt-0"]}`}
        >
          Software Engineer <br /> with over 2 years of code
        </p>
        <a
          className={`${defs["font-medium"]} ${defs["dark-text"]} ${styles["cta__activator"]}`}
          onClick={handleAboutClick}
        >
          Who is Igor Meirelles
          <svg
            className={`${defs["dark-text"]} ${styles["cta__icon"]}`}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </a>
      </main>
      <SideGrid />
    </section>
  );
}
