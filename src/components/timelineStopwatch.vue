<script setup>
import { watchEffect } from 'vue'
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING } from '../constants'
import { ICON_PLAY, ICON_PAUSE, ICON_ARROW_PATH } from '../icons'
import { currentHour, formatSeconds } from '../functions'
import { isTimeLineItemValid } from '../validators'
import BaseButton from './BaseButton.vue'
import { updateTimelineItem } from '../timelineItems'
import BaseIcon from './BaseIcon.vue'
import { useStopwatch } from '../stopwatch'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid
  }
})

const { seconds, isRunning, start, stop, reset } = useStopwatch(props.timelineItem.activitySeconds)
watchEffect(() =>
  updateTimelineItem(props.timelineItem, {
    activitySeconds: seconds.value
  })
)
</script>
<template>
  <div class="flex w-full gap-2">
    <BaseButton :disabled="!timelineItem.activitySeconds" :type="BUTTON_TYPE_DANGER" v-on:click="reset">
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-violet-200 px-2 font-mono text-3xl">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" v-on:click="stop">
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      :disabled="timelineItem.hour !== currentHour()"
      @click="start"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
