<script>
import {BUTTON_TYPE_DANGER ,BUTTON_TYPE_NEUTRAL} from '../constants'

  const typeClasses = {
    [BUTTON_TYPE_NEUTRAL]:'enabled:hover:bg-violet-600 border bg-violet-200',
    [BUTTON_TYPE_DANGER]:'enabled:hover:bg-red-600 border bg-red-200 text-white',
  }

</script>
<script setup>
import {isButtonTypeValid} from '../validators'
defineProps({
  type:{
    default: BUTTON_TYPE_NEUTRAL,
    type:String,
    validator: isButtonTypeValid
  }
})
</script>
<template>
  <button
    :class="`${typeClasses[type]} rounded  p-3 disabled:cursor-not-allowed disabled:opacity-50`"
  >
    <slot></slot>
  </button>
</template>
