import { ref } from "vue"
import { PAGE_TIMELINE } from './constants'
import { isTheNavValid } from "./validators"

export const timelineRef = ref()
export const currentPage = ref(normalizePageHash())


export function navigate(page) {
    if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
      timelineRef.value.scrollToHour()
    }else if (page !== PAGE_TIMELINE) {
      document.body.scrollIntoView()
    }
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