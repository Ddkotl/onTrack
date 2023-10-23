<script setup>
import { isHourValid } from '../validators'
import {currentHour} from '../functions'
const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isHourValid
  }
})
const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg',
  props.hour === currentHour()
    ? 'bg-purple-800 font-black text-white '
    : 'bg-green-100 text-green-500 '
]
const formattedHour = `${props.hour.toString().padStart(2, 0)}:00`
</script>
<template>
  <a href="#" :class="classes">{{ formattedHour }}</a>
</template>
