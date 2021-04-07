<template>
  <div class="topbar">
    <div class="title">{{ title }}</div>
    <div class="settings">{{ user }}</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'TopBar',
    props: {
      title: {
        type: String,
        default: '后台管理系统',
      },
      user: {
        type: String,
        default: 'whbbit',
      },
    },
  })
</script>

<style lang="scss" scoped>
  .topbar {
    display: flex;
    justify-content: space-between;
    align-content: center;
    .title {
      display: flex;
      justify-content: center;
      align-content: center;
      height: 5vh;
      line-height: 5vh;
      font-weight: 700;
      font-size: 20px;
    }
    .settings {
      display: flex;
      justify-content: center;
      align-content: center;
      height: 5vh;
      line-height: 5vh;
    }
  }
</style>
