<template>
  <el-container direction="vertical">
    <el-container direction="horizontal">
      <el-aside width="200px">
        <!-- Aside content -->
        <el-menu mode="vertical" style="height:100vh" :default-active="$route.path" router>
          <el-submenu v-for="(item, index) in menu.items" :index="`menu-item-${index}`" :key="`menu-item-${index}`">
            <template #title>{{ item.title }}</template>
            <el-menu-item v-for="(subItem, subIndex) in item.items" :index="subItem.path" :key="`menu-item-${index}-${subIndex}`"> <i :class="subItem.icon"></i>{{ subItem.title }} </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container direction="vertical">
        <el-header height="5vh" class="header">
          <!-- Header content -->
          <TopBar title="朽月岛后台管理界面" user="whbbit" />
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

  import TopBar from '@/components/TopBar.vue'

  export default defineComponent({
    name: 'Main',
    components: {
      TopBar,
    },
    setup() {
      const menu = {
        items: [
          {
            title: '控制台',
            items: [{ title: '首页', path: '/', icon: 'el-icon-monitor' }],
          },
          {
            title: '内容管理',
            items: [
              { title: '课程管理', path: '/courses/list', icon: 'el-icon-help' },
              { title: '课时管理', path: '/episodes/list', icon: 'el-icon-video-camera' },
              { title: '标签管理', path: '/tags/list', icon: 'el-icon-collection-tag' },
              { title: '分类管理', path: '/categories/list', icon: 'el-icon-collection' },
              { title: '文章管理', path: '/articles/list', icon: 'el-icon-reading' },
            ],
          },
          {
            title: '运营管理',
            items: [
              { title: '用户管理', path: '/users/list', icon: 'el-icon-user' },
              { title: '广告管理', path: '/ads/list', icon: 'el-icon-pie-chart' },
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
</style>
