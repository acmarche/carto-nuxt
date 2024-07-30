<script setup>
const slug = useRoute().params.slug
useSeoMeta({
  title: () => `${slug ?? ''}`,
})
const filters = ref({tags: [slug]})
const {
  pending,
  data,
  error
} = updateSearchGet(filters)
</script>
<template>
  <section class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div v-if="error">{{ error }}</div>
    <WidgetsTitle>Par tag {{slug}}</WidgetsTitle>
    <ul class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-4 lg:gap-x-4 mt-4">
      <li class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white45"
          v-for="fiche in data.hits" :key="fiche.id">
        <ShopItem :fiche/>
      </li>
    </ul>
  </section>
</template>