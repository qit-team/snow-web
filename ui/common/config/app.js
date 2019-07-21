let apiConst = {
  prefix: "/api",
  menu: "/menu",
  config: "/config",
  task: {
    taskType: {
      search: "/task/taskType/search"
    },
    create: "/task/create",
    update: "/task/update",
    search: "/task/opensearch/search",
    batchDispacth: "/task/batchDispacth",
    batchRelease: "/task/batchRelease",
    searchLog: "/task/getLogs"
  },
  sysmng: {
    staff: {
      loginInfo: "/sysmng/staff/loginInfo",
      tilingOrgs: "/orgs/getTilingOrgs"
    }
  },
  sms: {
    sendSms: "/sms/sendSms",
    template: {
      list: "/sms/template/list",
      add: "/sms/template/add",
      delete: "/sms/template/delete",
      edit: "/sms/template/edit"
    },
    log: {
      list: "/sms/getSmsLog"
    }
  },
  org: {
    tilingOrgs: "/orgs/getTilingOrgs",
    getUsers: "/orgs/getUsers",
    addUser: "/orgs/addUser",
    deleteUser: "/orgs/deleteUser",
    editUser: "/orgs/editUser"
  },
  user: {
    getLfqUserInfo: "/user/getLfqUserInfo",
    getCreditInfo: "/user/getCreditInfo",
    getLfqOrder: "/order/getLfqOrder",
    getLfqBillList: "/bill/getBillList",
    getBigCreditOrder: "/order/getBigCreditOrder",
    getBigCreditBill: "/bill/getBigCreditBillList"
  },
  call: {
    getCallRecords: "/callRecords/getCallRecords"
  },
  route: (idx, args, appendix) => {
    var splits = idx.split(".");
    var path = api;
    for (var i in splits) {
      path = path[splits[i]];
    }

    // set up path
    for (var key in args) {
      path = path.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
    }

    // set up appendix
    appendix = undefined === appendix ? "" : appendix;

    return api.prefix + path + appendix;
  }
};

global.api = apiConst;

// 定义服务端路由配置
export const api = apiConst;

export const auth = {
  prefix: "",
  menu: "/menu",
  config: "/config",
  getAllUsersMap: "getAllUsersMap",
  route: (idx, args, appendix) => {
    var splits = idx.split(".");
    var path = auth;
    for (var i in splits) {
      path = path[splits[i]];
    }

    // set up path
    for (var key in args) {
      path = path.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
    }

    // set up appendix
    appendix = undefined === appendix ? "" : appendix;

    return auth.prefix + path + appendix;
  }
};

export const paginationDefaultProps = {
  showTotal: (total, range) => {
    return `共 ${total} 条记录「${range[0]}-${range[1]}」`;
  },
  position: "both",
  pageSize: 20,
  current: 1,
  showSizeChanger: true,
  showQuickJumper: true
};

export const DATE_FORMAT = "YYYY-MM-DD";
export const DATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

// 呼叫中心全局配置
global.callcenter = {
  wintel_server_ip: "59.110.145.132",
  wintelapi_url: "http://ccapi.qudian.com",
  vcc_code: "qudian",
  agent_callers: {
    laifenqi: "01068440788"
  }
};
