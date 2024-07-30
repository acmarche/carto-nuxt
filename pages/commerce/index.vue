<script setup>
const slug = useRoute().params.slug
useSeoMeta({
  title: () => 'Liste des commerces et acteurs',
})
const filters = ref({localite: null, tags: [], coordinates: null})
const {
  pending,
  data,
  error
} = updateSearchGet(filters)
</script>
<template>
  <section class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div v-if="error">{{ error }}</div>
    <div v-if="pending">Chargement...</div>
    <div>
      <WidgetsTitle>Liste des acteurs</WidgetsTitle>
      <ListResult :data v-if="data"/>
    </div>
  </section>
</template>