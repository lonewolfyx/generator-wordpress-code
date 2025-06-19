import type { RouteRecordRaw } from 'vue-router'
import { NotebookTabs } from 'lucide-vue-next'

export const ContentRouter: RouteRecordRaw[] = [
    {
        path: '/content',
        name: 'content',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: 'Content',
            icon: NotebookTabs,
        },
        children: [
            {
                path: 'post-type',
                name: 'Post Type Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'post-status',
                name: 'Post Status Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'taxonomy',
                name: 'Taxonomy Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'shortcodes',
                name: 'Shortcodes Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'meta-box',
                name: 'Meta Box Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
            {
                path: 'term-meta',
                name: 'Term Meta Generator',
                component: () => import('@/views/Content/PostType.vue'),
            },
        ],
    },
]
