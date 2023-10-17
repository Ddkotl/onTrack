<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimelinePage from './pages/TheTimelinePage.vue'
import TheActivitiesPage from './pages/TheActivitiesPage.vue'
import TheProgressPage from './pages/TheProgressPage.vue'
import {normalizePageHash} from './functions'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

const currentPage = ref(normalizePageHash())

function goTo(page) {
  currentPage.value = page
}
</script>
<template>
  <TheHeader
    v-on:goToTimeline="goTo(PAGE_TIMELINE)"
    v-on:goToProgress="goTo(PAGE_PROGRESS)"
  />
  <main class="flex flex-col flex-grow">
    <TheTimelinePage v-show="currentPage === PAGE_TIMELINE" />
    <TheActivitiesPage v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgressPage v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :currentPage="currentPage" v-on:navigation="goTo($event)" />
</template>
