import { createRouter, createWebHistory } from 'vue-router'
import { AdminRouter } from '@/router/module/admin.ts'
import { ContentRouter } from '@/router/module/content.ts'
import { CoreRouter } from '@/router/module/core.ts'
import { OtherRouter } from '@/router/module/Other.ts'
import { QueryRouter } from '@/router/module/query.ts'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/layout/index.vue'),
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
        },
        ...ContentRouter,
        ...CoreRouter,
        ...AdminRouter,
        ...QueryRouter,
        ...OtherRouter,
    ],
})

export default router
