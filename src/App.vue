<template>
  <div class="container">
    <div class="header-prop"></div>
    <div class="header">
      <TopNavigation @init-router="initRouter()" ref="TopNav"></TopNavigation>
    </div>
    <div class="main">
      <div class="sidebar"><SideNavigation ref="SideNav"></SideNavigation></div>
      <div class="content">
        <div class="router-tip">
          <!-- {{ navStore.titleFirstName }} / {{ navStore.titleLastName }} -->
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import TopNavigation from "./components/TopNavigation.vue";
import SideNavigation from "./components/SideNavigation.vue";
const SideNav = ref(null);
const TopNav = ref(null);
const router = useRouter();
const currentRoute = ref(router.currentRoute.value);
watch(
  () => router.currentRoute.value,
  (to) => {
    currentRoute.value = to;
    //根据路由调整侧导航
    if (to.fullPath.slice(-3) === "/") {
      SideNav.value.handleMenuChange("1-4");
    } else {
      SideNav.value.handleMenuChange(to.fullPath.slice(-3));
    }
    //根据路由调整上导航
    const str = to.fullPath;
    const matches = str.match(/\/([^/]+)\//);
    if (to.fullPath === "/") {
      TopNav.value.initBusinessType("Group");
    } else {
      if (matches && matches.length > 1) {
        const content = matches[1];
        TopNav.value.initBusinessType(content);
      } else {
        TopNav.value.initBusinessType("Group");
      }
    }
  }
);
//登录相关
import haierLogin from "../src/utils/login";
onMounted(() => {
  haierLogin.login();
});
//初始化侧导航
const initRouter = () => {
  if (SideNav.value) {
    SideNav.value.initNav();
  }
};
</script>

<style lang="scss">
body {
  margin: 0 8px;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .container {
    width: 100%;
    height: 700px;
    //阴影
    background-color: #fff;
    overflow: hidden;
    .header-prop {
      height: 65.8px;
    }
    .header {
      width: 100%;
      position: fixed;
      top: 0;
      background-color: #fff;
      z-index: 999;
    }
    .main {
      width: 100%;
      display: flex;
      .sidebar {
        width: 17.8%;
      }
      .content {
        width: 82.2%;
        height: 800px;
        padding: 0 1%;
        background-color: #f2f2f2;
        overflow-y: auto;
        overflow-x: hidden;
        .router-tip {
          width: 100%;
          height: 25px;
          padding: 5px 0 0 8px;
          line-height: 75px;
          text-align: left;
          font-family: MicrosoftYaHei, 微软雅黑, sans-serif;
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.4470588235294118);
        }
      }
    }
  }
}
</style>
