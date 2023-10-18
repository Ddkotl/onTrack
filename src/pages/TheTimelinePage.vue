<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { isTimeLineItemsValid } from '../validators';


defineProps({
  timelineItems:{
    required:true,
    type:Array,
    validator: isTimeLineItemsValid
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
      />
    </ul>
  </div>
</template>
