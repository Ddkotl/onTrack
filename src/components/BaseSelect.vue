<script setup>
import {isBaseSelectValid} from '../validators'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'

defineProps({
  options: {
    required: true,
    type: Array,
    validator: isBaseSelectValid,
  },
  placeholder: {
    required: true,
    type: String
  },
  selected: {
    required: true,
    type: Number
  }
})
</script>
<template>
  <div class="flex gap-2">
    <BaseButton>
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select class="w-full truncate rounded bg-violet-200 py-1 px-2 text-2xl">
      <option selected disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
