<script setup>
import BaseSelect from '../components/BaseSelect.vue'
import timelineHour from './timelineHour.vue'
import timelineStopwatch from './timelineStopwatch.vue'
import { isTimeLineItemValid,  isUndefined } from '../validators'
import {setTimelineItemActivity} from '../timelineItems'
import {activitySelectOptions} from '../activities'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid
  }
})

const emit = defineEmits({
  scrollToHour: isUndefined
})

</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-green-700 py-10 px-4">
    <timelineHour
      :hour="timelineItem.hour"
      v-on:click.prevent="emit('scrollToHour')"
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
