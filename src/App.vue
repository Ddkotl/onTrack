<script setup>
import { ref, computed } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimelinePage from './pages/TheTimelinePage.vue'
import TheActivitiesPage from './pages/TheActivitiesPage.vue'
import TheProgressPage from './pages/TheProgressPage.vue'
import {
  normalizePageHash,
  generateActivities,
  generateTimelineItems,
  generateActivitySelectOptions
} from './functions'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

const currentPage = ref(normalizePageHash())

const activities = ref(generateActivities())

const timelineItems = ref(generateTimelineItems(activities.value))

const activitySelectOptions = computed(() => {
 return generateActivitySelectOptions(activities.value)
})

function goTo(page) {
  currentPage.value = page
}

function deleteActivity(activity) {
  timelineItems.value.forEach((timelineItem)=>{
    if(timelineItem.activityId ===activity.id){
      timelineItem.activityId = null,
      timelineItem.activitySeconds = null
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity(activity) {
  activities.value.push(activity)
}

function setTimelineItemActivity(timelineItem,activity){
  timelineItem.activityId = activity.id
}

function setActivitySecondsToComplete(activity,secondsToComplete){
  activity.secondsToComplete= secondsToComplete
}
</script>
<template>
  <TheHeader v-on:navigation="goTo($event)" />
  <main class="flex flex-col flex-grow">
    <TheTimelinePage
      v-show="currentPage === PAGE_TIMELINE"
      :activities="activities"
      :timelineItems="timelineItems"
      :activitySelectOptions="activitySelectOptions"
      v-on:setTimelineItemActivity="setTimelineItemActivity"
    />
    <TheActivitiesPage
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      v-on:deleteActivity="deleteActivity"
      v-on:createActivity="createActivity"
      v-on:setActivitySecondsToComplete="setActivitySecondsToComplete"
    />
    <TheProgressPage v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :currentPage="currentPage" v-on:navigation="goTo($event)" />
</template>
