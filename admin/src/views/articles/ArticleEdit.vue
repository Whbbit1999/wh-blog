<template>
  <div>
    <h3>{{ isNew ? `新建` : `编辑` }}文章</h3>
    <el-form ref="form" :model="state.data" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="state.data.title"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="state.data.categories" placeholder="分类">
          <el-option label="label" value="value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <el-select v-model="state.data.tags" placeholder="标签">
          <el-option label="label" value="value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="封面">
        <el-input v-model="state.data.cover"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="state.data.body"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="$router.push(`/articles/list`)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, getCurrentInstance, onMounted, reactive } from 'vue'
  import { successMsg, errorMsg } from '../../utils/tools'

  export default defineComponent({
    name: 'ArticleEdit',
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
      async function submit() {
        const url = !props.id ? `articles` : `articles/${props.id}`
        const method = !props.id ? `post` : `put`
        const res = await ctx.$http[method](url, state.data)
        if (res) {
          successMsg('保存成功')
          // 清空列表
          state.data = {}
          // 返回上一页 -> 标签列表页
          ctx.$router.go(-1)
        } else {
          errorMsg('保存失败')
        }
      }
      async function fetch() {
        const res = await ctx.$http.get(`articles/${props.id}`)
        state.data = res.data
      }
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
