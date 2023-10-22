<script setup>
import { validateActivities, isActivityValid, isNumber } from '../validators'
import ActivityItem from '../components/ActivityItem.vue'
import TheActivityForm from '../components/TheActivityForm.vue'
import TheActivityEmptyState from '../components/TheActivityEmptyState.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  setActivitySecondsToComplete(activity, secondsToComplate) {
    return [isActivityValid(activity), isNumber(secondsToComplate)].every(Boolean)
  },
  createActivity: isActivityValid,
  deleteActivity: isActivityValid
})

function setSecondsToComplete(activity, secondsToComplate) {
  emit('setActivitySecondsToComplete', activity, secondsToComplate)
}
</script>
<template>
  <div class="flex flex-col grow">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        v-on:delete="emit('deleteActivity', activity)"
        v-on:setSecondsToComplete="setSecondsToComplete(activity, $event)"
      />
    </ul>
    <TheActivityEmptyState v-else />
    <TheActivityForm v-on:submit="emit('createActivity', $event)" />
  </div>
</template>
