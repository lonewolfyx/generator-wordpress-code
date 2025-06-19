import type { RouteRecordRaw } from 'vue-router'
import { Currency } from 'lucide-vue-next'

export const OtherRouter: RouteRecordRaw[] = [
    {
        path: '/other',
        name: 'other',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: 'Other',
            icon: Currency,
        },
        children: [
            {
                path: 'plugin-header',
                name: 'Plugin Header Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'theme-header',
                name: 'Theme Header Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'widgets',
                name: 'Widgets Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'sidebar',
                name: 'Sidebar Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'add-image-size',
                name: 'Add Image Size Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'oembed-provider',
                name: 'oEmbed Provider Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'custom-user-profile-fields',
                name: 'Custom User Profile Fields',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'wp-mail-function',
                name: 'WP Mail Function Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
        ],
    },
]
