<template>
  <div>
    <h3>{{ isNew ? '创建' : '编辑' }}课时</h3>
    <el-form ref="form" :model="state.data" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="state.data.name"></el-input>
      </el-form-item>
      <el-form-item label="视频">
        <el-input v-model="state.data.cover"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="$router.push(`/courses/list`)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, getCurrentInstance, onMounted, reactive } from 'vue'
  import { successMsg, errorMsg } from '../../utils/tools'
  export default defineComponent({
    name: 'EpisodeEdit',
    props: {
      id: {
        type: String,
      },
    },

    setup(props) {
      const { ctx }: any = getCurrentInstance()
      // 判断是否有id
      const isNew = computed(() => {
        return !props.id
      })
      const state = reactive({
        data: {},
      })
      const submit = async () => {
        const url = !props.id ? `courses` : `courses/${ctx.id}`
        const method = !props.id ? `post` : `put`
        const res = await ctx.$http[method](url, state.data)
        if (res) {
          successMsg('保存成功')
          // 清空列表
          state.data = {}
          // 返回上一页 -> 视频列表页
          ctx.$router.go(-1)
        } else {
          errorMsg('保存失败')
        }
      }

      // 获取数据
      async function fetch() {
        const res = await ctx.$http.get(`courses/${ctx.id}`)
        state.data = res.data
      }
      // 如果有id传入，就是要修改数据
      onMounted(() => {
        props.id && fetch()
      })
      return {
        fetch,
        state,
        isNew,
        submit,
      }
    },
  })
</script>

<style lang="sass" scoped></style>
