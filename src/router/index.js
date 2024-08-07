import { createRouter, createWebHistory } from "vue-router";
// //集团分组组件
// const GroupDevelopmentProject = () =>
//   import("../components/group/DevelopmentProject.vue");
import GroupDevelopmentProject from "../components/group/DevelopmentProject.vue";
// const GroupDevelopmentInvestment = () =>
//   import("../components/group/DevelopmentInvestment.vue");
import GroupDevelopmentInvestment from "../components/group/DevelopmentInvestment.vue";
//专利
// const GroupPatent = () => import("../components/group/GroupPatent");
import GroupPatent from "../components/group/GroupPatent";
//科技奖项
// const GroupTechnologyAwards = () =>
//   import("../components/group/TechnologyAwards");
import GroupTechnologyAwards from "../components/group/TechnologyAwards";
//科技口碑
// const GroupTechnologyReputation = () =>
//   import("../components/group/TechnologyReputation");
import GroupTechnologyReputation from "../components/group/TechnologyReputation";
//科技合作
// const GroupTechnologyCooperation = () =>
//   import("../components/group/TechnologyCooperation");
import GroupTechnologyCooperation from "../components/group/TechnologyCooperation";

const routes = [
  {
    path: "/",
    name: "Home",
    component: GroupTechnologyCooperation,
  },
  //集团
  {
    path: "/Group/1-1",
    name: "GroupDevelopmentProject",
    component: GroupDevelopmentProject,
  },
  {
    path: "/Group/1-2",
    name: "GroupDevelopmentInvestment",
    component: GroupDevelopmentInvestment,
  },
  {
    path: "/Group/2-2",
    name: "GroupPatent",
    component: GroupPatent,
  },
  {
    path: "/Group/2-4",
    name: "GroupTechnologyAwards",
    component: GroupTechnologyAwards,
  },
  {
    path: "/Group/2-5",
    name: "GroupTechnologyReputation",
    component: GroupTechnologyReputation,
  },
  {
    path: "/Group/1-4",
    name: "GroupTechnologyCooperation",
    component: GroupTechnologyCooperation,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
