<script setup>
import { isBaseSelectValid,isUndefinedOrNull,isNumberOrNull } from '../validators'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { computed } from 'vue';

const props = defineProps({
  options: {
    required: true,
    type: Array,
    validator: isBaseSelectValid
  },
  placeholder: {
    required: true,
    type: String
  },
  selected: {
    type: Number
  }
})

const emit = defineEmits({
  select: isNumberOrNull
})

const isNotSelected = computed(()=>{
 return isUndefinedOrNull(props.selected)
})
</script>
<template>
  <div class="flex gap-2">
    <BaseButton v-on:click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-violet-200 py-1 px-2 text-2xl"
      v-on:change="emit('select', +$event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
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
