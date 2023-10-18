<script setup>
import { PAGE_PROGRESS, PAGE_TIMELINE } from '../constants';
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
import { isTheNavValid } from '../validators';

const emit = defineEmits({
  navigation: isTheNavValid
})
</script>
<template>
  <header
    class="sticky top-0 z-20 flex items-center justify-between border-b border-green-500 bg-white p-3"
  >
    <TheLogo v-on:click="emit('navigation',PAGE_TIMELINE)" />
    <TheHeaderProgress v-on:click="emit('navigation',PAGE_PROGRESS)" />
  </header>
</template>
