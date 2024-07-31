<script setup>
const slug = useRoute().params.slug
useSeoMeta({
  title: () => `${slug ?? ''}`,
})
const filters = ref({tags: [slug]})
const {
  status,
  data,
  error
} = updateSearchGet(filters)
//const tags = computed(()=>data.value.filters.forEach(item => item.slug))
</script>
<template>
  <section class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
    <WidgetsTitle>Par tag {{ slug }}</WidgetsTitle>
    <WidgetsLoader v-if="status==='pending'"/>
    <div v-if="error">{{ error }}</div>
    <div v-if="data">
      <ul>
        <li v-for="(items,groupName, index) in data.filters" :key="index">
          <span class="font-semibold">{{ groupName }}</span>
          <ul v-if="groupName !== 'localite'" class="flex flex-row gap-2 pl-3">
            <li v-for="tag in items"
                class="border border-amber-100 rounded-lg p-3 bg-carto-pink text-white hover:text-amber-50">
              <NuxtLink :to="`/tag/${tag.slug}`">
                {{ tag.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
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