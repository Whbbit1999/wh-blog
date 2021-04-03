<template>
  <div>
    <h3>课程列表</h3>
    <el-button size="small" type="primary" icon="el-icon-plus" @click="$router.push(`/courses/create`)">
      添加
    </el-button>
    <el-table :data="state.data.data" style="width: 100%" border>
      <el-table-column v-for="(field, name) in fields" :key="field._id" :prop="name" :label="field.label"> </el-table-column>
      <el-table-column fixed="right" label="操作" :width="200">
        <template #default="{row}">
          <el-button size="small" type="success" @click="$router.push(`/courses/edit/${row._id}`)">编辑</el-button>
          <el-button size="small" type="danger" @click="remove(row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  import { ElMessage } from 'element-plus'
  import { defineComponent, getCurrentInstance, onMounted, reactive } from 'vue'

  export default defineComponent({
    name: 'CourseList',
    setup() {
      const { ctx }: any = getCurrentInstance()
      const state = reactive({
        data: {},
      })
      const fields = {
        _id: { label: 'ID' },
        name: { label: '课程' },
        cover: { label: '封面' },
      }
      // 获取数据
      async function fetch() {
        const res = await ctx.$http.get('courses')
        state.data = res.data
      }
      // 删除数据
      async function remove(val: string) {
        const res = await ctx.$http.delete(`courses/${val}`)
        if (res.status == 200) {
          successMsg()
          fetch()
        } else {
          errorMsg()
        }
      }

      onMounted(() => {
        fetch()
      })

      // 成功消息
      const successMsg = () => {
        ElMessage.success({
          message: '删除成功',
          type: 'success',
        })
      }
      // 失败消息
      const errorMsg = () => {
        ElMessage.error({
          message: '删除失败',
          type: 'error',
        })
      }
      return { state, fetch, fields, remove, successMsg, errorMsg }
    },
  })
</script>

<style lang="sass" scoped></style>
