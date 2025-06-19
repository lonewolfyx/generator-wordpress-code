import type { RouteRecordRaw } from 'vue-router'
import { Gauge } from 'lucide-vue-next'

export const AdminRouter: RouteRecordRaw[] = [
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: 'Admin',
            icon: Gauge,
        },
        children: [
            {
                path: 'dashboard-widgets',
                name: 'Dashboard Widgets',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'settings-page',
                name: 'Settings Page',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'toolbar',
                name: 'Toolbar Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'quicktags',
                name: 'Quicktags Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'oembed',
                name: 'oEmbed Providers',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'user-contact-methods',
                name: 'User Contact Methods',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'login-form',
                name: 'Login Form Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'admin-notice',
                name: 'Admin Notice Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'meta-box',
                name: 'MetaBox generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'settings-page',
                name: 'Settings Page Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'admin-bar',
                name: 'Admin Bar Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'user-role',
                name: 'User Role Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'user-fields',
                name: 'User Fields Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'child-theme',
                name: 'Child Theme Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
        ],
    },
]
