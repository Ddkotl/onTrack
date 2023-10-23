<script setup>
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import { currentPage, timelineRef } from './router'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimelinePage from './pages/TheTimelinePage.vue'
import TheActivitiesPage from './pages/TheActivitiesPage.vue'
import TheProgressPage from './pages/TheProgressPage.vue'

</script>
<template>
  <TheHeader />
  <main class="flex flex-col flex-grow">
    <TheTimelinePage
      v-show="currentPage === PAGE_TIMELINE"
      ref="timelineRef"
    />
    <TheActivitiesPage v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgressPage v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav />
</template>
