<script setup>
import {  BUTTON_TYPE_DANGER } from '../constants'
import { isActivityValid } from '../validators'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import ActivitySecondsToComplete from '../components/ActivitySecondsToComplete.vue'
import { inject } from 'vue'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const periodSelectOptions = inject('periodSelectOptions')
const deleteActivity = inject('deleteActivity')
const setActivitySecondsToComplete = inject('setActivitySecondsToComplete')
</script>
<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" v-on:click="deleteActivity(activity)">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="Выберите время"
        :selected="activity.secondsToComplete || null"
        :options="periodSelectOptions"
        v-on:select="setActivitySecondsToComplete(activity,$event|| 0)"
      />
      <ActivitySecondsToComplete
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
    </div>
  </li>
</template>
