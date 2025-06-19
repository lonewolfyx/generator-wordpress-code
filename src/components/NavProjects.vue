<script setup lang="ts">
import {
    Rocket,
} from 'lucide-vue-next'

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar'

defineProps<{
    projects: {
        name: string
        url: string
        // icon: LucideIcon
    }[]
}>()

const { isMobile } = useSidebar()
</script>

<template>
    <SidebarGroup class="group-data-[collapsible=icon]:hidden">
        <SidebarGroupLabel>Projects</SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem v-for="item in projects" :key="item.name">
                <SidebarMenuButton as-child>
                    <a :href="item.url" target="_blank" :title="item.name">
                        <component :is="Rocket" />
                        <span>{{ item.name }}</span>
                    </a>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <!--            <SidebarMenuItem> -->
            <!--                <SidebarMenuButton class="text-sidebar-foreground/70"> -->
            <!--                    <MoreHorizontal class="text-sidebar-foreground/70" /> -->
            <!--                    <span>More</span> -->
            <!--                </SidebarMenuButton> -->
            <!--            </SidebarMenuItem> -->
        </SidebarMenu>
    </SidebarGroup>
</template>
