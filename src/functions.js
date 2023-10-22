import {
  PAGE_TIMELINE,
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
  MINUTS_IN_HOUR,
  MILLISECONDS_IN_SECOND
} from './constants'
import { isTheNavValid, isNull } from './validators'

export function generateActivities() {
  return ['Кодинг', 'Тренировка', 'Сон'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR
  }))
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

export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour,
      activityId: null,
      activitySeconds: 0
    })
  }
  return timelineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ label: activity.name, value: activity.id }))
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generatePeriodSelectOptions(periodsInMinutes) {


  return periodsInMinutes.map((periodsInMinutes) => {
    return {
      value: periodsInMinutes * SECONDS_IN_MINUTE,
      label: generatePeriodSelectOptionsLabel(periodsInMinutes)
    }
  })
}

function generatePeriodSelectOptionsLabel(periodsInMinutes) {
  const hours = Math.floor(periodsInMinutes / MINUTS_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = (periodsInMinutes % MINUTS_IN_HOUR).toString().padStart(2, 0)
  return `${hours}:${minutes}`
}

export function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)

  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':')-2 , utc.indexOf(':')+6)
}
