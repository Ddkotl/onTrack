<script setup>
import { ref, computed, provide, readonly } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import {
  generateActivities,
  generateTimelineItems,
  generateActivitySelectOptions,
  generatePeriodSelectOptions
} from './functions'
import { currentPage,timelineRef } from './router'
import * as keys from './keys'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimelinePage from './pages/TheTimelinePage.vue'
import TheActivitiesPage from './pages/TheActivitiesPage.vue'
import TheProgressPage from './pages/TheProgressPage.vue'


const activities = ref(generateActivities())

const timelineItems = ref(generateTimelineItems(activities.value))


const activitySelectOptions = computed(() => {
  return generateActivitySelectOptions(activities.value)
})



function deleteActivity(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      ;(timelineItem.activityId = null), (timelineItem.activitySeconds = null)
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity(activity) {
  activities.value.push(activity)
}

function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId || 0
}

function updateTimelineItemActivitySeconds(timelineItem, activitySeconds) {
  timelineItem.activitySeconds += activitySeconds
}
function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}
provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds)
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, deleteActivity)
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
provide(keys.timelineItemsKey, readonly(timelineItems.value) )
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions.value))
</script>
<template>
  <TheHeader />
  <main class="flex flex-col flex-grow">
    <TheTimelinePage
      v-show="currentPage === PAGE_TIMELINE"
      :timelineItems="timelineItems"
      ref="timelineRef"
    />
    <TheActivitiesPage v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgressPage v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav />
</template>
