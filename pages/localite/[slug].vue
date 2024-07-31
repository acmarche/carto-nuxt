<script setup>
const slug = useRoute().params.slug
useSeoMeta({
  title: () => `${slug ?? ''}`,
})
const filters = ref({localite: slug})
const {
  status,
  data,
  error
} = updateSearchGet(filters)
</script>
<template>
  <section class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
    <WidgetsError :error="error.message" v-if="error"/>
    <WidgetsLoader v-if="status==='pending'"/>
    <WidgetsTitle>Par localité {{ slug }}</WidgetsTitle>
    <div v-if="data">
      <ListTitle :count="data.count"/>
      <ul class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-4 lg:gap-x-4 mt-4">
        <li class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white45"
            v-for="fiche in data?.hits" :key="fiche.id">
          <ShopItem :fiche/>
        </li>
      </ul>
      <div class="prose lg:prose-xl" v-if="data.hits.length === 0">
        Rien n'a été trouvé :-(
      </div>
    </div>
  </section>
</template>