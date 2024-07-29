<script setup>
import sciencetype from "@/assets/icon/sciencetype.vue";
import scienceresult from "@/assets/icon/scienceresult.vue";
import { useNavStore } from "@/stores/nav";
import { ref, reactive, computed, defineExpose } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const navStore = useNavStore();
//测导航下拉类目名
const systemName = ref("科创体系");
const resultName = ref("科创成果");
//测导航选中项
const activeMenu = ref("1-1");
//更改选中项
const handleMenuChange = (value) => {
  activeMenu.value = value;
};
//路由跳转
const routeNavigation = (path) => {
  router.replace("/" + navStore.businessType + "/" + path);
};
//点击更改表格路径
const changeTitleName = (firstName, lastName) => {
  navStore.titleNameChange(firstName, lastName);
};
//初始化侧导航 初始化路由
const initNav = () => {
  handleMenuChange("1-1");
  routeNavigation("1-1");
};
defineExpose({ initNav });
//不同业务类型侧导航选项
const GroupNav = reactive({
  system: [
    { label: "研发项目", value: "1-1" },
    { label: "研发投入", value: "1-2" },
    { label: "科技人才", value: "1-3" },
    { label: "科技合作", value: "1-4" },
  ],
  result: [
    { label: "市场收入", value: "2-1" },
    { label: "专利", value: "2-2" },
    { label: "标准", value: "2-3" },
    { label: "科技奖项", value: "2-4" },
    { label: "科技口碑", value: "2-5" },
  ],
});
const SmartHomeNav = reactive({
  system: [
    { label: "研发项目", value: "1-1" },
    { label: "研发投入", value: "1-2" },
    { label: "科技人才", value: "1-3" },
    { label: "科技合作", value: "1-4" },
  ],
  result: [
    { label: "市场收入", value: "2-1" },
    { label: "专利", value: "2-2" },
    { label: "标准", value: "2-3" },
    { label: "科技奖项", value: "2-4" },
  ],
});
//侧导航选项
const systemList = computed(() => {
  switch (navStore.businessType) {
    case "Group":
      return GroupNav.system;
    case "SmartHome":
      return SmartHomeNav.system;
    default:
      return [];
  }
});
const resultList = computed(() => {
  switch (navStore.businessType) {
    case "Group":
      return GroupNav.result;
    case "SmartHome":
      return SmartHomeNav.result;
    default:
      return [];
  }
});
</script>

<template>
  <el-row class="side-nav-container">
    <el-col :span="24">
      <el-menu
        :default-active="activeMenu"
        :default-openeds="['1', '2']"
        @select="handleMenuChange"
        class="SideNav"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon> <sciencetype></sciencetype></el-icon>
            <span>{{ systemName }}</span>
          </template>
          <el-menu-item
            v-for="item in systemList"
            :key="item.value"
            :index="item.value"
            @click="
              changeTitleName(systemName, item.label);
              routeNavigation(item.value);
            "
            >{{ item.label }}</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon> <scienceresult></scienceresult></el-icon>
            <span>{{ resultName }}</span>
          </template>
          <el-menu-item
            v-for="item in resultList"
            :key="item.value"
            :index="item.value"
            @click="
              changeTitleName(resultName, item.label);
              routeNavigation(item.value);
            "
            >{{ item.label }}</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.side-nav-container {
  margin-top: 25px;
  font-family: "MicrosoftYaHeiUILight", "Microsoft YaHei UI Light",
    "Microsoft YaHei UI", sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 14px;
  text-align: left;
  .is-active.el-menu-item {
    background-color: #f1faff;
    color: #73a4db;
    border-right: solid 2px #5384b7;
  }
  :deep(.el-sub-menu__title:hover) {
    background-color: transparent;
    color: #73a4db;
  }
  .el-menu-item:hover {
    background-color: transparent;
    color: #73a4db;
  }
  .is-active.el-menu-item:hover {
    background-color: #f1faff;
    color: #73a4db;
    border-right: solid 2px #5384b7;
  }
  .el-icon svg {
    height: 13px;
    width: 13px;
  }
}
</style>
