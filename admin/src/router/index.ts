import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    children: [
      // 首页
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      // 课程管理 -- 课程列表
      {
        path: '/courses/list',
        name: 'CourseList',
        component: () => import('../views/courses/CourseList.vue'),
      },
      // 课程管理 -- 修改课程
      {
        path: '/courses/edit/:id',
        name: 'CourseEdit',
        component: () => import('../views/courses/CourseEdit.vue'),
        props: true,
      },
      // 课程管理 -- 创建课程
      {
        path: '/courses/create',
        name: 'CourseCreate',
        component: () => import('../views/courses/CourseEdit.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
