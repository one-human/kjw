import { createRouter, createWebHistory } from "vue-router";
//集团分组组件
const GroupDevelopmentProject = () =>
  import("../components/group/DevelopmentProject.vue");
const GroupDevelopmentInvestment = () =>
  import("../components/group/DevelopmentInvestment.vue");

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
