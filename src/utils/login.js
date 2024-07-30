import { useUserStore } from "@/stores/user";
let haierUserCenterObj; // 注入的全局对象

if (window.__USERCENTER__ === "undefined") {
  console.warn("=====未找到ihaier注入对象=====");
} else {
  haierUserCenterObj = window.__USERCENTER__;
}

//登录参数配置
haierUserCenterObj.configUserCenter({
  //   clientId: "ac13df8ba1ff1f24eacdb02a808d1ffd", //生产K码
  //   ssoUrl: "https://iama.haier.net", //账号中心统一登录页
  //   appId: "cli_a4002e7c9f78900e", //应用ID
  //   tokenUrl: "https://zbbk.haier.net/auth/getTokenAndUserInfo", //集成了账号中心提供后端服务的地址
  appId: "cli_a6e00664d9d2900b",
  clientId: "Kc58ee302e3a60056",
  ssoUrl: "https://iam-test.haier.net", // 账号中心统一登录页
  tokenUrl: "https://llsdp-sit.haier.net/lls-report-api/auth/token", // 集成了账号中心提供的后端服务的地址
});

const haierLogin = {
  //登录API
  login: async () => {
    try {
      const res = await haierUserCenterObj.login({
        // force: false, // 自动登录失败后，是否立刻重定向到账号中心登录页
        // invalidateToken: false, // 是否禁用当前token以重新登录
      });
      // console.log("登录", res);
      if (res.success) {
        const userStore = useUserStore();
        // console.log("登录成功", res);
        userStore.setToken(res.token);
        userStore.setUserInfo(res.userInfo);
        userStore.setNickName(res.userInfo.nickName);
      } else {
        console.error("login error 1====", res.errorMessage);
      }
    } catch (error) {
      console.error("login error 2====", error);
    }
  },
  //重新登录
  reLogin: async (state = "") => {
    await haierUserCenterObj.reLogin({ state });
  },
};

export default haierLogin;
