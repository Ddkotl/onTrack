<script setup>
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '../constants'
import {isActivityValid} from '../validators'
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'

defineProps({
  activity: {
    required: true,
    type: String,
    validator:isActivityValid
  }
})


const secondsToComplate = ref(null)
</script>
<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        placeholder="ч:мин"
        :selected="secondsToComplate"
        :options="PERIOD_SELECT_OPTIONS"
        v-on:select="secondsToComplate = $event"
      />
    </div>
  </li>
</template>
