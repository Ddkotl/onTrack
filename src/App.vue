<script setup>
import { ref, computed, provide } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import {
  generateActivities,
  generateTimelineItems,
  generateActivitySelectOptions,
  generatePeriodSelectOptions
} from './functions'
import { currentPage,timelineRef } from './router'
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
  timelineItem.activityId = activityId
}

function updateTimelineItemActivitySeconds(timelineItem, activitySeconds) {
  timelineItem.activitySeconds += activitySeconds
}
function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}
provide('updateTimelineItemActivitySeconds', updateTimelineItemActivitySeconds)
provide('setTimelineItemActivity', setTimelineItemActivity)
provide('setActivitySecondsToComplete', setActivitySecondsToComplete)
provide('createActivity', createActivity)
provide('deleteActivity', deleteActivity)
provide('periodSelectOptions', generatePeriodSelectOptions())
provide('timelineItems', timelineItems.value)
provide('activitySelectOptions', activitySelectOptions.value)
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
