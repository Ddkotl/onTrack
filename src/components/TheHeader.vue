<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'

const emit = defineEmits(['goToTimeline','goToProgress'])
</script>
<template>
  <header
    class="sticky top-0 z-20 flex items-center justify-between border-b border-violet-900 bg-white p-3"
  >
    <TheLogo v-on:click="emit('goToTimeline')" />
    <TheHeaderProgress v-on:click="emit('goToProgress')" />
  </header>
</template>
