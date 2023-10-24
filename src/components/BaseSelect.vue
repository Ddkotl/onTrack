<script setup>
import { isBaseSelectValid,isUndefinedOrNull,isSelectValueValid } from '../validators'
import BaseIcon from './BaseIcon.vue';
import BaseButton from './BaseButton.vue'
import { computed } from 'vue';
import {normalizeSelectValue} from '../functions'
import { ICON_XMARK } from '../icons'

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
      <BaseIcon :name="ICON_XMARK" />
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
