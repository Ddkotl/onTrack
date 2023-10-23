<script setup>
import BaseSelect from '../components/BaseSelect.vue'
import timelineHour from './timelineHour.vue'
import timelineStopwatch from './timelineStopwatch.vue'
import { isTimeLineItemValid,  isHourValid } from '../validators'
import { inject } from 'vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid
  }
})

const emit = defineEmits({
  scrollToHour: isHourValid
})

const setTimelineItemActivity = inject('setTimelineItemActivity')
const activitySelectOptions = inject('activitySelectOptions')

</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-green-700 py-10 px-4">
    <timelineHour
      :hour="timelineItem.hour"
      v-on:click.prevent="emit('scrollToHour', timelineItem.hour)"
    />
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Выберите занятие"
      v-on:select="setTimelineItemActivity(timelineItem, $event)"
    />
    <timelineStopwatch :timelineItem="timelineItem" />
  </li>
</template>
