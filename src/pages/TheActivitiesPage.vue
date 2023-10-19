<script setup>
import ActivityItem from '../components/ActivityItem.vue'

const activities = ['Кодинг', 'Тренировка', 'Сон']
</script>
<template>
  <div>
    <ul class="divide-y">
      <ActivityItem v-for="activity in activities" :key="activity"/>
    </ul>
  </div>
</template>
