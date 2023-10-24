<script setup>
import { computed } from 'vue';
import { formatSeconds } from '../functions'
import { isActivityValid } from '../validators'
import {calculateTrackedActivitySeconds, timelineItems} from '../timelineItems'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const classes = computed(()=>
  `flex items-center rounded  px-2 font-mono text-xl ${colorClasses.value}`
)
const colorClasses = computed(()=>
  secondsDiff.value < 0 ?'bg-yellow-300 text-yellow-800': 'bg-green-300 text-green-800'
)
const seconds = computed(()=>`${sign.value}${formatSeconds(secondsDiff.value)}`)
const sign = computed(()=> secondsDiff.value >=0 ?'+' : '-')
const secondsDiff = computed(()=>
calculateTrackedActivitySeconds(timelineItems.value, props.activity) - props.activity.secondsToComplete
)
</script>
<template>
  <div :class="classes">
    {{ seconds }}
  </div>
</template>
