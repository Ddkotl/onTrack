<script setup>
import { ref } from 'vue'
import BaseSelect from '../components/BaseSelect.vue'
import timelineHour from './timelineHour.vue'
import { isTimeLineItemValid,isBaseSelectValid } from '../validators'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid
  },
  activitySelectOptions:{
    required: true,
    type:Array,
    validator: isBaseSelectValid
  }
})



const selectedActivitiId = ref(0)
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-green-700 py-10 px-4">
    <timelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="selectedActivitiId"
      :options="activitySelectOptions"
      placeholder="Выберите занятие"
      v-on:select="selectedActivitiId = $event"
    />
  </li>
</template>
