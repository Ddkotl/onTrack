<script>
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING
} from '../constants'

const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'enabled:hover:bg-violet-800 border bg-violet-500 text-white',
  [BUTTON_TYPE_DANGER]: 'enabled:hover:bg-red-800 border bg-red-500 text-white',
  [BUTTON_TYPE_PRIMARY]: 'enabled:hover:bg-sky-800 border bg-sky-500 text-white',
  [BUTTON_TYPE_SUCCESS]: 'enabled:hover:bg-green-800 border bg-green-500 text-white',
  [BUTTON_TYPE_WARNING]: 'enabled:hover:bg-yellow-800 border bg-yellow-500 text-white'
}
</script>
<script setup>
import { isButtonTypeValid } from '../validators'
const props = defineProps({
  type: {
    default: BUTTON_TYPE_NEUTRAL,
    type: String,
    validator: isButtonTypeValid
  }
})
const classes = [
  'rounded p-3 disabled:cursor-not-allowed disabled:opacity-50',
  typeClasses[props.type]
]
</script>
<template>
  <button :class="classes">
    <slot />
  </button>
</template>
