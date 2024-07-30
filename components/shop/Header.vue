<script setup>
defineProps({
  icon: {
    type: String,
    default: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4ec.svg',
    required: false,
  },
  cover: {
    type: String,
    default: '',
    required: true
  },
})
</script>
<template>
  <header class="bg-gray-200 mb-14" style="height: 30vh">
    <NuxtImg class="w-full object-center-50 block"
             style="height: 30vh;"
             :src="cover"
             alt=""/>
    <!-- ICON -->
    <div class="max-w-32 ms-2 md:ms-24 -mt-12">
      <img class="h-24 w-24 sm:h-20 sm:w-20 animate-bounce-in-top duration-700"
           :src="icon"
           alt=""
           v-if="icon">
    </div>
  </header>
</template>