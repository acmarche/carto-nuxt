<script setup>
defineProps({
  to: {
    type: String,
  }
})
</script>
<template>
  <NuxtLink
      class="group [transform:translateZ(0)] px-3 py-3 rounded-lg bg-carto-pink overflow-hidden relative before:absolute before:bg-carto-green before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500"
      :to>
    <span
        class="relative z-0 text-white group-hover:text-gray-200 transition ease-in-out duration-500">
   <slot></slot>
    </span>
  </NuxtLink>
</template>