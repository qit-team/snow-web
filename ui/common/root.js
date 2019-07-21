import React from "react";
import Frame from "./Frame";
import { HashRouter, Route } from "react-router-dom";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

class Root extends React.Component {
  render() {
    moment.locale("zh-cn");
    return (
      <LocaleProvider locale={zh_CN}>
        <HashRouter>
          <Route path="/" component={Frame} />
        </HashRouter>
      </LocaleProvider>
    );
  }
}

export default Root;
