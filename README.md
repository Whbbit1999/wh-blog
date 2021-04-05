# wh-blog

朽月岛博客平台源码

## 技术栈

前端展示： nuxt + tailwind css

后台管理界面：vue3 + typescript + element plus + tailwind css + echarts

后端： nest.js

> nest.js 安装`yarn global add @nestjs/cli`

数据库： mongodb

## 使用方式

### 后台管理界面启动

`yarn serve`

### 后端启动

供后台管理界面使用的后端: `nest start -w admin`
供前台展示界面使用的后端: `nest start -w server`
