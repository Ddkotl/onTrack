<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import {
  isTimeLineItemsValid,
  isBaseSelectValid,
  validateActivities,
  isActivityValid,
  isTimeLineItemValid,

} from '../validators'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: isTimeLineItemsValid
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: isBaseSelectValid
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  setTimelineItemActivity( timelineItem, activity ) {
    return [isTimeLineItemValid(timelineItem),isActivityValid(activity)].every(Boolean)
  }
})
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timelineItem="timelineItem"
        :activitySelectOptions="activitySelectOptions"
        :activities="activities"
        v-on:selectActivity="emit('setTimelineItemActivity', timelineItem,  $event )"
      />
    </ul>
  </div>
</template>
