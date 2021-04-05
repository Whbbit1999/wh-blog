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

      // 标签管理 -- 标签列表
      {
        path: '/tags/list',
        name: 'TagList',
        component: () => import('../views/tags/TagList.vue'),
      },
      // 标签管理 -- 新增标签
      {
        path: '/tags/create',
        name: 'TagCreate',
        component: () => import('../views/tags/TagEdit.vue'),
      },
      // 标签管理 -- 编辑标签
      {
        path: '/tags/edit/:id',
        name: 'TagEdit',
        component: () => import('../views/tags/TagEdit.vue'),
        props: true,
      },

      // 分类管理 -- 分类列表
      {
        path: '/categories/list',
        name: 'CategoryList',
        component: () => import('../views/categories/CategoryList.vue'),
      },
      // 分类管理 -- 新增分类
      {
        path: '/categories/create',
        name: 'CategoryCreate',
        component: () => import('../views/categories/CategoryEdit.vue'),
      },
      // 分类管理 -- 编辑分类
      {
        path: '/categories/edit/:id',
        name: 'CategoryEdit',
        component: () => import('../views/categories/CategoryEdit.vue'),
        props: true,
      },

      // 文章管理 -- 文章列表
      {
        path: '/articles/list',
        name: 'ArticleList',
        component: () => import('../views/articles/ArticleList.vue'),
      },
      // 文章管理 -- 新增文章
      {
        path: '/articles/create',
        name: 'ArticleCreate',
        component: () => import('../views/articles/ArticleEdit.vue'),
      },
      // 文章管理 -- 编辑文章
      {
        path: '/articles/edit/:id',
        name: 'ArticleEdit',
        component: () => import('../views/articles/ArticleEdit.vue'),
        props: true,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
