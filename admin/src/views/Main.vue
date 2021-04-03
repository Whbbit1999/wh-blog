<template>
  <el-container direction="vertical">
    <el-container direction="horizontal">
      <el-aside width="200px">
        <!-- Aside content -->
        <el-menu mode="vertical" style="height:100vh" :default-active="$route.path" router>
          <el-submenu v-for="(item, index) in menu.items" :index="`menu-item-${index}`" :key="`menu-item-${index}`">
            <template #title>{{ item.title }}</template>
            <el-menu-item v-for="(subItem, subIndex) in item.items" :index="subItem.path" :key="`menu-item-${index}-${subIndex}`">
              {{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container direction="vertical">
        <el-header height="5vh" class="header">
          <!-- Header content -->
          <div class="title">朽月岛后台管理界面</div>
          <div>用户名</div>
        </el-header>
        <el-main height="90vh">
          <!-- Main content -->
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Main',
    setup() {
      const menu = {
        items: [
          {
            title: '内容管理',
            items: [
              { title: '首页', path: '/' },
              { title: '课程管理', path: '/courses/list' },
              { title: '课时管理', path: '/episodes/list' },
              { title: '标签管理', path: '/tags/list' },
              { title: '分类管理', path: '/categories/list' },
              { title: '文章管理', path: '/articles/list' },
            ],
          },
          {
            title: '运营管理',
            items: [
              { title: '用户管理', path: '/users/list' },
              { title: '广告管理', path: '/ads/list' },
            ],
          },
        ],
      }
      return {
        menu,
      }
    },
  })
</script>

<style lang="scss" scoped>
  html,
  body {
    height: 100vh;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    .title {
      display: flex;
      justify-content: center;
      align-content: center;
      height: 5vh;
      line-height: 5vh;
    }
  }
</style>
