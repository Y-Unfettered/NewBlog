import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

console.log('routes', routes); // 这里打印的路由信息我粘贴到下面了

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
