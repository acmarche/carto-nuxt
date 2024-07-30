<script setup>
//https://codepen.io/shadeed/pen/yLpWBmP
</script>
<template>
  <h1 class="w-full max-w-full flex items-center font-bold leading-5 text-2xl md:text-4xl text-esquare-black break-words whitespace-pre-wrap pt-1 pr-1 pl-1 m-0 mb-3">
    <slot></slot>
  </h1>
</template>
<style>
h1:after {
  content: "";
  flex: 1;
  border: 1px solid #bdc900;
  margin-inline-start: 0.5rem;
}
</style>