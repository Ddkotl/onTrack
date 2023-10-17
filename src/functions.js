import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)
  const findItem = [PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)
  // const findItem = navItems.find((el) => el[0] === hash)
  if (findItem) {
    return hash
  } else {
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
  }
}

