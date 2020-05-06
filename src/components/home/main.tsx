import React from "react";

import Header from "../header";
import Sider from "../sider";
import "./styles/main.modules.less";

export default function Home() {
  return (
    <div className={"home"}>
      <Header />
      <div className={"home-content"}>
        <Sider />
        {"首页"}
      </div>
    </div>
  );
}
