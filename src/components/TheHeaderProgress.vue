<script setup>
import { PAGE_PROGRESS, HUNDRED_PERSENT } from '../constants'
import BaseIcon from './BaseIcon.vue'
import { navigate } from '../router'
import { useTotalProgress } from '../total-progress'
import { ICON_CHECK_CIRCLE } from '../icons'
const { colorClass, percentage } = useTotalProgress()
</script>
<template>
  <a :href="`#${PAGE_PROGRESS}`" v-on:click="navigate(PAGE_PROGRESS)" class="text-sm">
    <div v-if="percentage < HUNDRED_PERSENT" class="flex items-center gap-1">
      <div>
        Прогресс: <span class="font-mono">{{ percentage }}%</span>
      </div>
      <div :class="`h-3 w-3 rounded-full ${colorClass}`" />
    </div>
    <div v-else class="flex items-center gap-1">
      День завершен!
      <BaseIcon :name="ICON_CHECK_CIRCLE" class="h-7 text-green-500" />
    </div>
  </a>
</template>
