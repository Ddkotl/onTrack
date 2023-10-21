<script>
import {BUTTON_TYPE_DANGER ,BUTTON_TYPE_NEUTRAL,BUTTON_TYPE_PRIMARY} from '../constants'

  const typeClasses = {
    [BUTTON_TYPE_NEUTRAL]:'enabled:hover:bg-violet-800 border bg-violet-400',
    [BUTTON_TYPE_DANGER]:'enabled:hover:bg-red-800 border bg-red-400 text-white',
    [BUTTON_TYPE_PRIMARY]:'enabled:hover:bg-sky-800 border bg-sky-400 text-white',
  }

</script>
<script setup>
import {isButtonTypeValid} from '../validators'
defineProps({
  type:{
    default: BUTTON_TYPE_PRIMARY,
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
