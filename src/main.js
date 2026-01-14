import { createApp } from 'vue'
import App from './App.vue'
// 导入我们刚刚创建的路由实例
import router from './router'

const app = createApp(App)
// 使用路由插件
app.use(router)
app.mount('#app')