import { defineStore } from "pinia";

export const useNavStore = defineStore("nav", {
  state: () => ({
    //业务类型
    businessType: "Group",
    //表格路径名称
    titleFirstName: "科创体系",
    titleLastName: "研发项目",
  }),
  actions: {
    //更改业务类型
    businessTypeChenge(value) {
      this.businessType = value;
    },
    //更改表格路径名称
    titleNameChange(firstName, LastName) {
      this.titleFirstName = firstName;
      this.titleLastName = LastName;
    },
  },
  getters: {},
});
