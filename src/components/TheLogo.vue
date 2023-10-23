<script setup>
import { PAGE_TIMELINE } from '../constants';
import {navigate} from '../router'


</script>
<template>
  <a :href="`#${PAGE_TIMELINE}`" v-on:click="navigate(PAGE_TIMELINE)">
    <img src="../assets/img/logo.png" alt="logo" class="h-9" />
  </a>
</template>
