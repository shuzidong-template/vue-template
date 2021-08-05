<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="logo">
        <img :src="LogoSvg" alt="logo" />
      </div>
      <LayoutMenu :list="menus" />
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <router-view />
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import LayoutMenu from "@/components/Menu/index.vue";
export default {
  name: "BasicLayout",
  components: {
    LayoutMenu,
  },
  data() {
    return {
      LogoSvg: require("@/assets/logo.svg"),
      menus: [
        {
          key: "导航一",
          value: "nav1",
          icon: "user",
        },
        {
          key: "导航二",
          value: "nav2",
          icon: "user",
        },
      ],
    };
  },
};
</script>
<style lang="less">
#components-layout-demo-fixed-sider {
  .logo {
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    margin: 16px;
  }
}
</style>
