<script setup>
import { validateActivities, isActivityValid } from '../validators'
import BaseButton from '../components/BaseButton.vue'
import ActivityItem from '../components/ActivityItem.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})
const emit = defineEmits({
  createActivity: isActivityValid,
  deleteActivity: isActivityValid
})

let newActivity = ''
</script>
<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        v-on:delete="emit('deleteActivity', activity)"
      />
    </ul>
    <form 
    v-on:submit.prevent="emit('createActivity', newActivity)"
    class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4" >
      <input
        :value="newActivity"
        v-on:input="newActivity = $event.target.value"
        type="text"
        class="w-full rounded border px-4 text-xl"
        placeholder="Новая активность"
      />
      <BaseButton>
        <PlusIcon class="h-8" />
      </BaseButton>
    </form>
  </div>
</template>
