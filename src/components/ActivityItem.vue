<script setup>
import {  BUTTON_TYPE_DANGER,PERIOD_SELECT_OPTIONS } from '../constants'
import { ICON_TRASH } from '../icons'
import { isActivityValid } from '../validators'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import BaseIcon from './BaseIcon.vue'
import { deleteActivity,updateActivity } from '../activities'
import ActivitySecondsToComplete from '../components/ActivitySecondsToComplete.vue'
import { resetTimelineItemActivities,timelineItems } from '../timelineItems'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

function deleteAndResetActivity(activity){
  resetTimelineItemActivities(timelineItems.value, activity)
  deleteActivity(activity)
}

</script>
<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" v-on:click="deleteAndResetActivity(activity)">
        <BaseIcon :name="ICON_TRASH" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="Выберите время"
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        v-on:select="updateActivity(activity,{secondsToComplete: $event || 0})"
      />
      <ActivitySecondsToComplete
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
    </div>
  </li>
</template>
