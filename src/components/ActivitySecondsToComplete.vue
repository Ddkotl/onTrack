<script setup>
import { computed,inject } from 'vue';
import { formatSeconds, getTotalActivitySeconds } from '../functions'
import { isActivityValid } from '../validators'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const timelineItems = inject('timelineItems')

const classes = computed(()=>
  `flex items-center rounded  px-2 font-mono text-xl ${colorClasses.value}`
)
const colorClasses = computed(()=>
  secondsDiff.value < 0 ?'bg-yellow-300 text-yellow-800': 'bg-green-300 text-green-800'
)
const seconds = computed(()=>`${sign.value}${formatSeconds(secondsDiff.value)}`)
const sign = computed(()=> secondsDiff.value >=0 ?'+' : '-')
const secondsDiff = computed(()=>
  getTotalActivitySeconds(props.activity,timelineItems) - props.activity.secondsToComplete
)
</script>
<template>
  <div :class="classes">
    {{ seconds }}
  </div>
</template>
