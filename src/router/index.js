import { createRouter, createWebHistory } from 'vue-router'

// 1. 定义路由组件（这里先简单引入，你可以后续修改）
const Home = { template: '<div>首页</div>' }
const About = { template: '<div>关于</div>' }

// 2. 定义一些路由
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. 创建路由实例
const router = createRouter({
  // 4. 使用 HTML5 历史记录模式（路径里没有#号，需要服务器支持）
  history: createWebHistory(),
  routes, // 缩写，相当于 `routes: routes`
})

// 5. 导出路由实例
export default router