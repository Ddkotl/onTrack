<script setup>
import { NULLABLE_ACTIVITY } from '../constants'
import BaseSelect from '../components/BaseSelect.vue'
import timelineHour from './timelineHour.vue'
import timelineStopwatch from './timelineStopwatch.vue'
import {
  isTimeLineItemValid,
  isBaseSelectValid,
  isActivityValid,
  validateActivities
} from '../validators'


const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: isBaseSelectValid
  }
})

const emit = defineEmits({
  selectActivity: isActivityValid
})
function selectActivity(id) {
  emit('selectActivity', findActivityById(id))
}

function findActivityById(id) {
  return props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
}
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-green-700 py-10 px-4">
    <timelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Выберите занятие"
      v-on:select="selectActivity"
    />
<timelineStopwatch :seconds="timelineItem.activitySeconds"/>
  </li>
</template>
