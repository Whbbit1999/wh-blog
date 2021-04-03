<template>
  <div>
    <h3>{{ isNew ? '创建' : '编辑' }}课程</h3>
    <el-form ref="form" :model="state.data" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="state.data.name"></el-input>
      </el-form-item>
      <el-form-item label="封面图">
        <el-input v-model="state.data.cover"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, getCurrentInstance, onMounted, reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  export default defineComponent({
    name: 'CourseEdit',
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
        const res = await ctx.$http.post('/courses', state.data)
        if (res.status == 201) {
          successMsg()
          // 清空列表
          state.data = {}
          // 返回上一页 -> 视频列表页
          ctx.$router.go(-1)
        } else {
          errorMsg()
        }
        console.log(res)
      }
      // 成功消息
      const successMsg = () => {
        ElMessage.success({
          message: '保存成功',
          type: 'success',
        })
      }
      // 失败消息
      const errorMsg = () => {
        ElMessage.error({
          message: '保存失败',
          type: 'error',
        })
      }
      return {
        state,
        isNew,
        submit,
        successMsg,
        errorMsg,
      }
    },
  })
</script>

<style lang="sass" scoped></style>
