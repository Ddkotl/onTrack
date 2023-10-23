import { ref, computed } from 'vue'
import { SECONDS_IN_HOUR } from './constants'
import {id} from './functions'


export const activities = ref(generateActivities())

export const activitySelectOptions = computed(() => {
  return generateActivitySelectOptions(activities.value)
})

export function createActivity(activity) {
  activities.value.push(activity)
}
export function deleteActivity(activity) {

  activities.value.splice(activities.value.indexOf(activity), 1)
}
export function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
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
