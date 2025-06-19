import type { RouteRecordRaw } from 'vue-router'
import { Database } from 'lucide-vue-next'

export const QueryRouter: RouteRecordRaw[] = [
    {
        path: '/query',
        name: 'query',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: 'Query',
            icon: Database,
        },
        children: [
            {
                path: 'wp-query',
                name: 'WP_Query Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'wp-tax-query',
                name: 'WP_Tax_Query Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'wp-term-query',
                name: 'WP_Term_Query Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'wp-comment-query',
                name: 'WP_Comment_Query Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'wp-user-query',
                name: 'WP_User_Query Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'wp-meta-query',
                name: 'WP_Meta_Query Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'wp-date-query',
                name: 'WP_Date_Query Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'wp-network-query',
                name: 'WP_Network_Query Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'wp-site-query',
                name: 'WP_Site_Query Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
        ],
    },
]
