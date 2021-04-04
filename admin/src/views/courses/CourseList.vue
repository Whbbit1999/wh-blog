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
  import { defineComponent, getCurrentInstance, onMounted, reactive } from 'vue'
  import { successMsg, errorMsg } from '../../utils/tools'
  import { ElMessageBox } from 'element-plus'

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
        ElMessageBox.confirm('确认删除 吗？', '删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await ctx.$http.delete(`courses/${val}`)
            if (res.status == 200) {
              successMsg('删除成功')
              fetch()
            } else {
              errorMsg('删除失败')
            }
          })
          .catch(() => {
            errorMsg('取消删除')
          })
      }

      onMounted(() => {
        fetch()
      })

      return { state, fetch, fields, remove }
    },
  })
</script>

<style lang="sass" scoped></style>
