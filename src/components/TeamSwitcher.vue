<script lang="ts" setup>
import { Terminal } from 'lucide-vue-next'

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
</script>

<template>
    <SidebarMenu>
        <SidebarMenuItem>
            <SidebarMenuButton
                class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                size="lg"
            >
                <div
                    class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                >
                    <component :is="Terminal" class="size-4" />
                </div>
                <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-medium">WordPress Generator</span>
                    <span class="truncate text-xs">the easiest and fastest code generator</span>
                </div>
            </SidebarMenuButton>
        </SidebarMenuItem>
    </SidebarMenu>
</template>
