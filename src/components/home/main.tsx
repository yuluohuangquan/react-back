import React from "react";

import css from "./styles/main.module.less";

export default function Home() {
  return (
    <div className={css.home}>
      <div className={css.homeContent}>{"首页"}</div>
    </div>
  );
}
