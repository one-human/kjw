import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    //用户token
    token: null,
    //用户信息
    userInfo: null,
  }),
  actions: {
    //设定token
    setToken(value) {
      this.token = value;
    },
    //设定用户信息
    setUserInfo(obj) {
      this.userInfo = obj;
    },
  },
  getters: {},
});
