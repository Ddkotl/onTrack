import { ref } from 'vue'
import { isTheNavValid } from './validators'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import TheTimelinePage from './pages/TheTimelinePage.vue'
import TheActivitiesPage from './pages/TheActivitiesPage.vue'
import TheProgressPage from './pages/TheProgressPage.vue'

export const routes = {
  [PAGE_TIMELINE]:TheTimelinePage,
  [PAGE_ACTIVITIES]:TheActivitiesPage,
  [PAGE_PROGRESS]:TheProgressPage
}

export const currentPage = ref(normalizePageHash())

export function navigate(page) {
  document.body.scrollIntoView()
  currentPage.value = page
}

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)
  const findItem = isTheNavValid(hash)
  if (findItem) {
    return hash
  } else {
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
  }
}
