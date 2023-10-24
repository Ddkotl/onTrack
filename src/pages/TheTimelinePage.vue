<script setup>
import { onActivated } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import {
  timelineItems,
  timelineItemsRefs,
  scrollToCurrentHour,
  scrollToHour
} from '../timelineItems'

onActivated(scrollToCurrentHour)
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timelineItem="timelineItem"
        ref="timelineItemsRefs"
        v-on:scrollToHour="scrollToHour(timelineItem.hour)"
      />
    </ul>
  </div>
</template>
