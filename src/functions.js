import { PAGE_TIMELINE,HOURS_IN_DAY, MIDNIGHT_HOUR,} from './constants'
import { isTheNavValid } from './validators'

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

export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}

export function generateActivitySelectOptions(activities){
  return activities.map((label,value)=>({label,value}))
}

