<script setup>
import BaseSelect from '../components/BaseSelect.vue'
import { isTimeLineItemValid } from '../validators';

const props = defineProps({
    timelineItem:{
        required:true,
        type:Object,
        validator: isTimeLineItemValid
    }
})

const hourLinkClasses = [
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-800 font-black text-white absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg'
    : 'bg-green-100 text-green-500 absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg'
]

const options = [
  { value: 1, label: 'Кодинг' },
  { value: 2, label: 'Тренировка' },
  { value: 3, label: 'Сон' }
]

const selectedActivitiId = 3
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-green-700 py-10 px-4">
    <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>
    <BaseSelect :selected="selectedActivitiId" :options="options" placeholder="Выберите занятие" />
  </li>
</template>
