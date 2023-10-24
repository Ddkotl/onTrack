import { ref, computed } from 'vue'
import { SECONDS_IN_HOUR,HUNDRED_PERSENT } from './constants'
import { id } from './functions'

export const activities = ref(generateActivities())

export const trackedActivities = computed(() =>
  activities.value.filter(({ secondsToComplete }) => secondsToComplete)
)

export const activitySelectOptions = computed(() => {
  return generateActivitySelectOptions(activities.value)
})

export function createActivity(activity) {
  activities.value.push(activity)
}
export function updateActivity(activity, fields) {
  return Object.assign(activity, fields)
}
export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function calculateActivityCompletionPercentage({secondsToComplete},trackedSeconds) {
  return Math.floor(
    (trackedSeconds * HUNDRED_PERSENT) / secondsToComplete
  )
}

function generateActivities() {
  return ['Кодинг', 'Тренировка', 'Сон'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR
  }))
}
function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ label: activity.name, value: activity.id }))
}


export function calculateCompletionPercentage(totalTrackedSeconds) {
  return Math.floor((totalTrackedSeconds * HUNDRED_PERSENT) / totalActivitySecondsToComplete.value)
}

const totalActivitySecondsToComplete = computed(() => {
  return trackedActivities.value
    .map(({ secondsToComplete }) => secondsToComplete)
    .reduce((total, seconds) => total + seconds, 0)
})