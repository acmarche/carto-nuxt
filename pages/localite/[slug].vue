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
    <ul>
      <li v-for="(items,groupName, index) in data.filters" :key="index">
        {{ groupName }}
        <ul v-if="groupName === 'localite'">
          <li v-for="tag in items">
            <NuxtLink :to="`/localite/${tag.slug}`">
              {{ tag.name }} {{ tag.count }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>

    <ul class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-4 lg:gap-x-4 mt-4">
      <li class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200"
          v-for="fiche in data?.hits" :key="fiche.id">
        <ShopItem :fiche/>
      </li>
    </ul>
    <div class="prose lg:prose-xl" v-if="data.hits.length === 0">
      Rien n'a été trouvé :-(
    </div>
  </section>
</template>