<script setup>
const name = ref('')
const description = ref('')
useSeoMeta({
  title: () => `Shop ${name.value ?? ''}`,
  description: () => `${description.value ?? ''}`
})
useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
</script>
<template>
  <div>
    x
  </div>
</template>