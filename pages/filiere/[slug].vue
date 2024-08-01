<script setup>
const breadcrumb = [
  {name: "Retour à la liste", link: "/filiere", id: 1}
]
const slug = useRoute().params.slug

async function results() {
  const {
    statusTag,
    tag,
    errorTag
  } = tagGet(slug)
  if (tag) {
    const filters = ref({tags: [tag?.value?.name]})
    const {status, data, error} = updateSearchGet(filters)
  }
}

useSeoMeta({
  title: () => `${tag?.value?.name ?? ''}`,
  description: () => `${tag?.value?.description ?? ''}`,
})
</script>
<template>
  <section class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
    <section class="mb-4 pl-2">
      <WidgetsBreadcrumb :breadcrumb/>
    </section>
    <WidgetsTitle>Par filière <i class="text-carto-pink">{{ tag?.name }}</i></WidgetsTitle>
    <p class="text-carto-gray300 m-4">{{ tag?.description }}</p>
    <WidgetsLoader v-if="status==='pending'"/>
    <WidgetsError :error="error.message" v-if="error"/>
    <WidgetsError :error="errorTag.message" v-if="errorTag"/>
    <ListTitle :count="data.count"/>
    <div v-if="data?.count > 0">
      <ul class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-4 lg:gap-x-4 mt-4">
        <li class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white45"
            v-for="fiche in data?.hits" :key="fiche.id">
          <ShopItem :fiche/>
        </li>
      </ul>
    </div>
    <div class="prose lg:prose-xl" v-if="data.count === 0">
      Rien n'a été trouvé :-(
    </div>
  </section>
</template>