<script setup>
import { PAGE_TIMELINE } from '../constants';
import {currentPage, navigate} from '../router'
import {scrollToCurrentHour} from '../timelineItems'

function handleClick(){
currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : navigate(PAGE_TIMELINE)
}

</script>
<template>
  <a :href="`#${PAGE_TIMELINE}`" v-on:click="handleClick">
    <img src="../assets/img/logo.png" alt="logo" class="h-9" />
  </a>
</template>
