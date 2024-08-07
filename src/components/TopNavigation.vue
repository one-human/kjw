<script setup>
import { ref, reactive, defineEmits, defineExpose } from "vue";
import { useNavStore } from "@/stores/nav";
import { useUserStore } from "@/stores/user";
let businessValue = ref("Group");
const navStore = useNavStore();
const userStore = useUserStore();
//初始化路由
const emit = defineEmits(["init-router"]);
const routerInit = () => {
  emit("init-router", "");
};
//初始化表格路径名称
const titleInit = () => {
  navStore.titleNameChange("科创体系", "研发项目");
};
//点击初始化 标题路径 侧导航 路由
const changeBusinessType = (value) => {
  navStore.businessTypeChenge(value);
  routerInit();
  titleInit();
};
const initBusinessType = (value) => {
  navStore.businessTypeChenge(value);
  businessValue.value = value;
};
defineExpose({ initBusinessType });
//业务类型
const businessType = reactive([
  {
    label: "集团",
    value: "Group",
  },
  {
    label: "智家",
    value: "SmartHome",
  },
  {
    label: "新事业",
    value: "NewVentures",
  },
  {
    label: "万链",
    value: "Wanlian",
  },
  {
    label: "海纳云",
    value: "HainaCloud",
  },
]);
</script>

<template>
  <div class="top-nav-container">
    <div class="logo-content">
      <img class="logo" src="../assets/logo.png" alt="logo" />
      <span class="title">科技委数字化运营看板</span>
    </div>
    <div class="type-content">
      <el-radio-group
        v-model="businessValue"
        text-color="#5991eb"
        fill="#d9f0fe"
        @change="changeBusinessType(businessValue)"
      >
        <el-radio-button
          v-for="item in businessType"
          :key="item.label"
          :value="item.value"
          >{{ item.label }}</el-radio-button
        >
      </el-radio-group>
    </div>
    <div class="repotr-content">
      <el-button type="default">
        <el-icon>
          <img src="../assets/download.png" style="width: 16px; height: 16px" />
        </el-icon>
        下载数据报告
      </el-button>
    </div>
    <div class="profile-content">
      <img class="avatar" src="../assets/avatar.png" alt="avatar" />
      <span class="name">{{ userStore.nickName }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-nav-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 65px;
  border-bottom: solid 1px #e5e5e5;
  .logo-content {
    width: 24.5%;
    margin-left: 32px;
    display: flex;
    align-items: flex-end;
    .logo {
      width: 77px;
      height: 29px;
    }
    .title {
      margin-left: 8px;
      font-family: "PingFangSC-Semibold", "PingFang SC Semibold", "PingFang SC",
        sans-serif;
      font-weight: 650;
      font-style: normal;
      font-size: 18px;
      color: #005aab;
      line-height: 26px;
    }
  }
  .type-content {
    width: 55.5%;
    text-align: left;
    :deep(.el-radio-button__inner) {
      font-family: "PingFang-SC-Regular", "PingFang SC", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 16px;
      color: rgb(51, 51, 51);
      border: none;
      display: inline-block;
      width: 106px;
      height: 32px;
    }
    .is-active :deep(.el-radio-button__inner) {
      font-weight: bold;
    }
  }
  .repotr-content {
    width: 12%;
    padding-top: 5px;
    :deep(.el-button) {
      width: 134px;
      height: 32px;
      font-family: "PingFang-SC-Regular", "PingFang SC", sans-serif;
      font-weight: 400;
      font-style: normal;
      color: #368aff;
      border: solid 1px #368aff;
      text-align: right;
      font-size: 13px;
      .el-icon {
        margin-right: 8px;
      }
    }
  }
  .profile-content {
    width: 8%;
    display: flex;
    justify-content: center;
    margin-left: -15px;
    margin-right: 6px;
    padding-top: 5px;
    .avatar {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
    .name {
      font-family: "PingFang-SC-Regular", "PingFang SC", sans-serif;
      font-size: 14px;
      font-weight: 400;
      font-style: normal;
    }
  }
}
</style>
