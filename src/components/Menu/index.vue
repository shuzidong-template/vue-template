<template>
  <a-menu theme="dark" mode="inline" :default-selected-keys="[0]">
    <a-menu-item :key="index" v-for="(item, index) in list">
      <a-icon :type="item.icon" />
      <span class="nav-text">{{ item.value }}</span>
    </a-menu-item>
  </a-menu>
</template>
<script>
export default {
  name: "Menu",
  props: {
    list: {
      required: true,
      type: Array,
      default: () => [],
    },
  },
};
</script>
