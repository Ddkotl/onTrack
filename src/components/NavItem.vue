<script >
export default{
    inheritAttrs:false
}
</script>
<template>
  <li  class="flex-1">
    <a class="flex flex-col items-center p-2 text-xs capitalize" v-bind="$attrs">
<slot></slot>
    </a>
  </li>
</template>
