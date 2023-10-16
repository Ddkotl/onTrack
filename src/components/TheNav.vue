<script setup>
import NavItem from './NavItem.vue'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
const navItems = {
  timelime: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon
}
</script>

<template>
  <nav class="sticky bottom-0 z-20 bg-white">
    <ul class="flex items-center justify-around border-t border-violet-900">
      <NavItem v-for="(icon, page) in navItems" :key="page" :href="`#${page}`">
        <component :is="icon" class="h-6 w-6 text-violet-500" />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
