
<script setup>
import { computed } from 'vue';
import { navigate,currentPage } from '../router'
import { isTheNavValid } from '../validators';

const props = defineProps({
  page:{
    required: true,
    type:String,
    validator:isTheNavValid
  }
})
const classes = computed(()=>[
'flex flex-col items-center p-2 text-xs capitalize',
{ 'bg-green-300 pointer-events-none': props.page === currentPage.value }
])
</script>
<template>
  <li class="flex-1">
    <a
      :class="classes"
      :href="`#${page}`"
      v-on:click="navigate(page)"
    >
      <slot></slot>
    </a>
  </li>
</template>
