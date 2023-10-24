<script setup>
import {  nextTick, ref } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue';
import { id } from '../functions';
import { BUTTON_TYPE_PRIMARY } from '../constants';
import { createActivity } from '../activities';
import { ICON_PLUS } from '../icons'

const name = ref('')

async function submit() {
  createActivity({
    id:id(),
    name:name.value,
    secondsToComplete:0
  })

  name.value = ''

  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}
</script>
<template>
  <form v-on:submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input
      v-model="name"
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Новая активность"
    />
    <BaseButton :type="BUTTON_TYPE_PRIMARY" :disabled="name.trim() === ''">
      <BaseIcon :name="ICON_PLUS" />
    </BaseButton>
  </form>
</template>
