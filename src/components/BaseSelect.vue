<script setup>
import { isBaseSelectValid,isUndefinedOrNull,isSelectValueValid } from '../validators'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { computed } from 'vue';
import {normalizeSelectValue} from '../functions'

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
    type: [Number,String]
  }
})

const emit = defineEmits({
  select: isSelectValueValid
})

const isNotSelected = computed(()=>{
 return isUndefinedOrNull(props.selected)
})

function select(value){
  emit('select',normalizeSelectValue(value) )
}
</script>
<template>
  <div class="flex gap-2">
    <BaseButton v-on:click="select(null)" >
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-violet-200 py-1 px-2 text-2xl"
      v-on:change="select($event.target.value)"
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
