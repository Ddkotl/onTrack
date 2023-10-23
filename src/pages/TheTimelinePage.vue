<script setup>
import { nextTick, ref, watchPostEffect } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import { isTimeLineItemsValid } from '../validators'
import { MIDNIGHT_HOUR, PAGE_TIMELINE } from '../constants'
import { currentPage } from '../router'
import { currentHour } from '../functions'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: isTimeLineItemsValid
  }
})

defineExpose({ scrollToHour })

const timelineItemsRefs = ref([])

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()
    scrollToHour(null, false)
  }
})

function scrollToHour(hour = null, isSmooth = true) {
  hour ??= currentHour()
  const el = hour === MIDNIGHT_HOUR ? document.body : timelineItemsRefs.value[hour - 1].$el
  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
}
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
