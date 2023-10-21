<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimelinePage from './pages/TheTimelinePage.vue'
import TheActivitiesPage from './pages/TheActivitiesPage.vue'
import TheProgressPage from './pages/TheProgressPage.vue'
import {
  normalizePageHash,
  generateTimelineItems,
  generateActivitySelectOptions
} from './functions'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

const currentPage = ref(normalizePageHash())

const timelineItems = generateTimelineItems()

const activities = ref(['Кодинг', 'Тренировка', 'Сон'])

const activitySelectOptions = generateActivitySelectOptions(activities.value)

function goTo(page) {
  currentPage.value = page
}

function deleteActivity(activity){
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity(activity){
  activities.value.push(activity)
}
</script>
<template>
  <TheHeader v-on:navigation="goTo($event)" />
  <main class="flex flex-col flex-grow">
    <TheTimelinePage
      v-show="currentPage === PAGE_TIMELINE"
      :timelineItems="timelineItems"
      :activitySelectOptions="activitySelectOptions"
    />
    <TheActivitiesPage
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      v-on:deleteActivity="deleteActivity"
      v-on:createActivity="createActivity"
    />
    <TheProgressPage v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :currentPage="currentPage" v-on:navigation="goTo($event)" />
</template>
