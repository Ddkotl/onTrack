
<script setup>
import { computed } from 'vue';
import { navigate,currentPage } from '../router'
import { isTheNavItemValid } from '../validators';
import BaseIcon from './BaseIcon.vue';

const props = defineProps({
  navItem:{
    required: true,
    type:Object,
    validator:isTheNavItemValid
  }
})
const classes = computed(()=>[
'flex flex-col items-center p-2 text-xs capitalize',
{ 'bg-green-300 pointer-events-none': props.navItem.page === currentPage.value }
])
</script>
<template>
  <li class="flex-1">
    <a
      :class="classes"
      :href="`#${navItem.page}`"
      v-on:click="navigate(navItem.page)"
    >
    <BaseIcon :name="navItem.icon" class="h-6 w-6 text-green-500" />
        {{ navItem.name }}
    </a>
  </li>
</template>
