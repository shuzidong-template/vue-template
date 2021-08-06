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
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <LayoutHeader />
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
import LayoutHeader from "@/components/Header/index.vue";
import { mapGetters } from 'vuex';
import mock from '../mock'
export default {
  name: "BasicLayout",
  components: {
    LayoutMenu,
    LayoutHeader
  },
  computed: {
    ...mapGetters(["getToken"])
  },
  data() {
    return {
      LogoSvg: require("@/assets/logo.svg"),
      menus: [],
    };
  },
  methods: {},
  created() {
    this.menus = mock.menus
    console.log(this.getToken, 'test mapGetters')
  },
  mounted() {},
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
