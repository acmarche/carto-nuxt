<script setup>
const slug = useRoute().params.slug
useSeoMeta({
  title: () => `${slug ?? ''}`,
})
const {
  pendingShop,
  shop,
  errorShop
} = shopGet(slug)
</script>
<template>
  <section class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div v-if="errorShop">{{ errorShop }}</div>
    <div v-if="pendingShop">Chargement...</div>
    <WidgetsTitle>{{ shop?.name }}</WidgetsTitle>
    {{ shop }}
  </section>
</template>