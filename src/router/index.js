import { createRouter, createWebHistory } from "vue-router";
//集团分组组件
const GroupDevelopmentProject = () =>
  import("../components/group/DevelopmentProject.vue");
const GroupDevelopmentInvestment = () =>
  import("../components/group/DevelopmentInvestment.vue");
const GroupPatent = () => import("../components/group/GroupPatent");

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
