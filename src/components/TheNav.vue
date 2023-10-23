<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants'


</script>

<template>
  <nav class="sticky bottom-0 z-20 bg-white">
    <ul class="flex items-center justify-around border-t border-green-500">
      <NavItem
        v-for="page in NAV_ITEMS"
        :key="page[0]"
        :page="page[0]"

      >
        <component :is="page[1]" class="h-6 w-6 text-green-500" />
        {{ page[2] }}
      </NavItem>
    </ul>
  </nav>
</template>
