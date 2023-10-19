<script setup>
import { ref } from 'vue'
import BaseSelect from '../components/BaseSelect.vue'
import timelineHour from './timelineHour.vue'
import { isTimeLineItemValid } from '../validators'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid
  }
})



const options = [
  { value: 1, label: 'Кодинг' },
  { value: 2, label: 'Тренировка' },
  { value: 3, label: 'Сон' }
]

const selectedActivitiId = ref(1)
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-green-700 py-10 px-4">
    <timelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="selectedActivitiId"
      :options="options"
      placeholder="Выберите занятие"
      v-on:select="selectedActivitiId = $event"
    />
  </li>
</template>
