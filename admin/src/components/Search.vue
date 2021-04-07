<template>
  <div>
    <el-form :inline="true" ref="form" :model="form" label-width="80px">
      <el-form-item label="搜索">
        <el-input v-model="state.search.name" placeholder="搜索"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        <el-button type="primary" icon="el-icon-delete" @click="cacle">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  export default defineComponent({
    name: 'Search',
    props: {
      searchText: {
        type: String,
        default: '',
      },
    },
    setup() {
      const state = reactive({
        search: {},
      })
      function cacle() {
        state.search = {}
      }
      function search() {
        console.log('search')
      }
      return {
        state,
        cacle,
        search,
      }
    },
  })
</script>
<style></style>
