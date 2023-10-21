<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { isTimeLineItemsValid,isBaseSelectValid } from '../validators';


defineProps({
  timelineItems:{
    required:true,
    type:Array,
    validator: isTimeLineItemsValid
  },
  activitySelectOptions:{
    required:true,
    type:Array,
    validator:isBaseSelectValid
  }
})


</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timelineItem="timelineItem"
        :activitySelectOptions="activitySelectOptions"
      />
    </ul>
  </div>
</template>
