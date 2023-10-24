import { computed } from 'vue'
import { getProgressColorClass } from './functions'
import { calculateActivityCompletionPercentage } from './activities'
import { timelineItems, calculateTrackedActivitySeconds } from './timelineItems'

export function useProgress(activity) {
  const colorClass = computed(() => getProgressColorClass(percentage.value))

  const percentage = computed(() =>
    calculateActivityCompletionPercentage(activity, trackedActivitySeconds.value)
  )

  const trackedActivitySeconds = computed(() =>
    calculateTrackedActivitySeconds(timelineItems.value, activity)
  )

  return {
    colorClass,
    percentage,
    trackedActivitySeconds
  }
}