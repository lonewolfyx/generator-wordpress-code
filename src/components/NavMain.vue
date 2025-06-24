<template>
    <SidebarGroup>
        <SidebarGroupLabel>Code Generator</SidebarGroupLabel>
        <SidebarMenu>
            <Collapsible
                v-for="item in appRouters"
                :key="item.name"
                :default-open="true"
                as-child
                class="group/collapsible"
            >
                <SidebarMenuItem>
                    <CollapsibleTrigger as-child>
                        <SidebarMenuButton :tooltip="item.name as string">
                            <component :is="item?.meta?.icon" v-if="item?.meta?.icon" />
                            <span>{{ item?.meta?.title }}</span>
                            <ChevronRight
                                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                            />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            <SidebarMenuSubItem v-for="subItem in item.children" :key="subItem.name">
                                <SidebarMenuSubButton as-child>
                                    <RouterLink
                                        :to="`${item.path}/${subItem.path}`"
                                        active-class="bg-primary text-white"
                                        exact-active-class=""
                                    >
                                        <span>{{ subItem.name }}</span>
                                    </RouterLink>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    </SidebarGroup>
</template>

<script lang="ts" setup>
import { ChevronRight } from 'lucide-vue-next'
import { type RouteRecordRaw, useRouter } from 'vue-router'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar'

const router = useRouter()

const appRouters: RouteRecordRaw[] = router.options.routes.filter((item: RouteRecordRaw) => !['NotFound', 'home', 'about'].includes(item.name as string))
</script>
