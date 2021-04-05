<template>
  <div>
    <h3>分类列表</h3>
    <el-button size="small" type="primary" icon="el-icon-plus" @click="$router.push(`/categories/create`)">
      添加
    </el-button>
    <el-table :data="state.data.data" style="width: 100%" border>
      <el-table-column v-for="(field, name) in fields" :key="field._id" :prop="name" :label="field.label"> </el-table-column>
      <el-table-column fixed="right" label="操作" :width="200">
        <template #default="{row}">
          <el-button size="small" type="success" @click="$router.push(`/categories/edit/${row._id}`)">编辑</el-button>
          <el-button size="small" type="danger" @click="remove(row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="state.query.page" :page-sizes="[5, 10, 50]" :page-size="state.query.limit" layout="total, sizes, prev, pager, next, jumper" :total="state.data.total"> </el-pagination>
  </div>
</template>

<script lang="ts">
  import { defineComponent, getCurrentInstance, onMounted, reactive, watchEffect } from 'vue'
  import { successMsg, errorMsg } from '../../utils/tools'
  import { ElMessageBox } from 'element-plus'
  export default defineComponent({
    name: 'CategoryList',
    setup() {
      const { ctx }: any = getCurrentInstance()
      const state = reactive({
        data: {},
        // 分页查询条件
        query: {
          page: 1,
          limit: 5,
        },
      })

      const fields = {
        _id: { label: 'ID' },
        category: { label: '标签' },
      }

      async function fetch() {
        const res = await ctx.$http.get('categories', {
          params: {
            query: state.query,
          },
        })
        state.data = res.data
      }
      async function remove(val: string) {
        ElMessageBox.confirm('确认删除吗？', '删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const res = await ctx.$http.delete(`categories/${val}`)
            if (res.status == 200) {
              successMsg(`${res.data.name}删除成功`)
              fetch()
            } else {
              errorMsg('删除失败')
            }
          })
          .catch(() => {
            errorMsg('取消删除')
          })
      }
      // 每页显示数据条数
      async function handleSizeChange(val: number) {
        state.query.limit = val
      }
      // 当前页改变
      async function handleCurrentChange(val: number) {
        state.query.page = val
      }
      onMounted(() => {
        fetch()
        watchEffect(() => {
          fetch()
        })
      })

      return {
        state,
        fields,
        fetch,
        remove,
        handleSizeChange,
        handleCurrentChange,
      }
    },
  })
</script>

<style lang="sass" scoped></style>
