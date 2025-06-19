import type { RouteRecordRaw } from 'vue-router'
import { Rocket } from 'lucide-vue-next'

export const CoreRouter: RouteRecordRaw[] = [
    {
        path: '/core',
        name: 'core',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: 'Core',
            icon: Rocket,
        },
        children: [
            {
                path: 'hooks',
                name: 'Hooks Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'wp-config',
                name: 'wp-config.php Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'register-scripts',
                name: 'Register WordPress Scripts',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'register-styles',
                name: 'Register WordPress Styles',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'plugin-readme',
                name: 'Plugin Readme Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'schedule-cron-job-event',
                name: 'Schedule Cron Job Event',
                component: () => import('@/views/Content/PostType.vue'),
            },
        ],
    },
]
