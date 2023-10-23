<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants'


</script>

<template>
  <nav class="sticky bottom-0 z-20 bg-white">
    <ul class="flex items-center justify-around border-t border-green-500">
      <NavItem
        v-for="navItem in NAV_ITEMS"
        :key="navItem.page"
        :navItem="navItem"

      >

      </NavItem>
    </ul>
  </nav>
</template>
