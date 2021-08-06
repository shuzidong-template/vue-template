<template>
  <a-layout-header>
    <a-dropdown>
      <span class="user-wrap">
        <a-avatar :src="avatar" size="default" shape="circle" />
        <span class="user">{{ getInfo.nickname || '雷神' }}</span>
      </span>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;" @click="signOut">
            <span>退出登录</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </a-layout-header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["getInfo"]),
    avatar() {
      const common = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
      return this.getInfo.avatar || common
    }
  },
  methods: {
    signOut() {
      this.$message.info("退出成功！", 1, () => {
        console.log('退出登录事件')
      });
    }
  }
};
</script>
<style lang="less" scoped>
.ant-layout-header {
  background: #fff;
  color: #333;
  text-align: right;
  .user-wrap {
    display: inline-block;
    cursor: pointer;
    text-align: right;
    vertical-align: middle;
    .user {
      font-size: 14px;
      vertical-align: middle;
      margin-left: 6px;
    }
  }
  .logout {
    margin-left: 20px;
  }
}
</style>