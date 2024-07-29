<template>
  <div class="container">
    <div class="header-prop"></div>
    <div class="header">
      <TopNavigation @init-router="initRouter()"></TopNavigation>
    </div>
    <div class="main">
      <div class="sidebar"><SideNavigation ref="SideNav"></SideNavigation></div>
      <div class="content">
        <div class="router-tip">
          {{ navStore.titleFirstName }} / {{ navStore.titleLastName }}
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TopNavigation from "./components/TopNavigation.vue";
import SideNavigation from "./components/SideNavigation.vue";
import { useNavStore } from "@/stores/nav";
import { useRouter } from "vue-router";
const router = useRouter();
const navStore = useNavStore();
const SideNav = ref(null);
//初始化侧导航
const initRouter = () => {
  if (SideNav.value) {
    SideNav.value.initNav();
  }
};
//初始化路由
router.replace("/" + navStore.businessType + "/" + "1-1");
//登录相关
import haierLogin from "../src/utils/login";
haierLogin.login();
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
    width: 95.8%;
    height: 956px;
    //阴影
    background-color: #fff;
    box-shadow: -3px 0 3px rgba(0, 0, 0, 0.15), 3px 0 3px rgba(0, 0, 0, 0.15);
    clip-path: inset(0 -10px);
    overflow: hidden;
    .header-prop {
      height: 65.8px;
    }
    .header {
      width: 94.8%;
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
        height: 891px;
        padding: 0 2%;
        background-color: #f2f2f2;
        overflow-y: auto;
        overflow-x: hidden;
        .router-tip {
          width: 100%;
          height: 75px;
          padding: 5px 0 0 8px;
          line-height: 75px;
          text-align: left;
          font-family: MicrosoftYaHei, 微软雅黑, sans-serif;
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.4470588235294118);
          // background-color: #fff;
        }
      }
    }
  }
}
</style>
