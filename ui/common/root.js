import React from "react";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import { Result, Icon, Button } from "antd";

class Root extends React.Component {
  render() {
    moment.locale("zh-cn");
    return (
      <LocaleProvider locale={zh_CN}>
        <Result
          icon={<Icon type="smile" theme="twoTone" />}
          title="Hey ! Welcome to snow-web"
          extra={<Button type="primary">Next</Button>}
        />
      </LocaleProvider>
    );
  }
}

export default Root;
