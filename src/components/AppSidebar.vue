<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'

import NavMain from '@/components/NavMain.vue'
import NavProjects from '@/components/NavProjects.vue'
import TeamSwitcher from '@/components/TeamSwitcher.vue'

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
} from '@/components/ui/sidebar'

const props = withDefaults(defineProps<SidebarProps>(), {
    collapsible: 'icon',
})

// This is sample data.
const data = {
    projects: [
        {
            name: 'Code reference',
            url: 'https://developer.wordpress.org/reference/',
        },
        {
            name: 'Developer Blog',
            url: 'https://developer.wordpress.org/news/',
        },
        {
            name: 'Download New WordPress',
            url: 'https://wordpress.org/download/',
        },
    ],
}
</script>

<template>
    <Sidebar v-bind="props">
        <SidebarHeader>
            <TeamSwitcher />
        </SidebarHeader>
        <SidebarContent>
            <NavMain />
            <NavProjects :projects="data.projects" />
        </SidebarContent>
        <!--        <SidebarFooter> -->
        <!--            <NavUser :user="data.user" /> -->
        <!--        </SidebarFooter> -->
    </Sidebar>
</template>
