<template>
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div class="flex items-center gap-2 px-4">
                    <SidebarTrigger class="-ml-1" />
                    <Separator orientation="vertical" class="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem class="hidden md:block">
                                Content
                            </BreadcrumbItem>
                            <BreadcrumbSeparator class="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Post Type Generator</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
                <span class="text-xs text-muted-foreground">coming......</span>
                <!--                <div class="grid auto-rows-min gap-4 md:grid-cols-3"> -->
                <!--                    <div class="aspect-video rounded-xl bg-muted/50" /> -->
                <!--                    <div class="aspect-video rounded-xl bg-muted/50" /> -->
                <!--                    <div class="aspect-video rounded-xl bg-muted/50" /> -->
                <!--                </div> -->
                <!--                <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> -->
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>

<script setup lang="ts">
import { type RouteRecordRaw, useRoute, useRouter } from 'vue-router'

import AppSidebar from '@/components/AppSidebar.vue'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const router = useRouter()
const route = useRoute()
console.log(router.options.routes.filter((item: RouteRecordRaw) => !['home', 'about'].includes(item.name as string)))
console.log(route)
</script>

<style lang="scss" scoped>

</style>
