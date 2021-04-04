import { ElMessage } from 'element-plus'
// element plus 弹出框
const successMsg = (msg: string) => {
  ElMessage.success({
    message: msg,
    type: 'success',
  })
}
// 失败消息
const errorMsg = (msg: string) => {
  ElMessage.error({
    message: msg,
    type: 'error',
  })
}

export { successMsg, errorMsg }
