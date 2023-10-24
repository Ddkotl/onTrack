<script setup>
import { PAGE_PROGRESS } from '../constants'
import BaseIcon from './BaseIcon.vue';
import {navigate} from '../router'
import { ICON_CHECK_CIRCLE } from '../icons'
</script>
<template>
  <a :href="`#${PAGE_PROGRESS}`" v-on:click="navigate(PAGE_PROGRESS)" class="text-sm">
    <div v-if="true" class="flex items-center gap-1">
      День завершен
      <BaseIcon :name="ICON_CHECK_CIRCLE" class="h-7 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-1">
      <div>Прогресс: <span class="font-mono">20%</span></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>
