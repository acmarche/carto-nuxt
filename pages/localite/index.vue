<script setup>
useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
const name = ref('Toutes les localités')
const description = ref('')
const {
  status,
  data,
  error
} = updateSearchGet({})
useSeoMeta({
  title: () => `${name.value ?? ''}`,
  description: () => `${description.value ?? ''}`
})
const localite = computed(() => data.value?.filters?.localite ?? []);
</script>
<template>
  <section class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
    <WidgetsTitle>Par localité</WidgetsTitle>
    <WidgetsLoader v-if="status==='pending'"/>
    <WidgetsError :error="error.message" v-if="error"/>
    <div v-if="localite" class="flex flex-row gap-2 pl-3 mt-3">
      <WidgetsLink
          v-for="tag in localite"
          :to="`/localite/${tag.name}`"> {{ tag.name }}</WidgetsLink>
    </div>
  </section>
</template>