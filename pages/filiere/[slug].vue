<script setup>
const breadcrumb = [
  {name: "Retour à la liste", link: "/filiere", id: 1}
]
const slug = useRoute().params.slug
const items = ref([])
const {tag} = tagGet(slug)

function execute() {
  const filters = ref({localite: null, tags: [tag?.value?.name], coordinates: null})
  const {
    status,
    data,
    error
  } = updateSearchGet(filters)
  if (data.value?.hits?.length > 0) {
    items.value = data?.value?.hits ?? []
  }
}
watch(tag, (val) => {
  if (val) {
    console.log('coucou')
    execute()
  }
}, {deep: true, immediate: false})
</script>
<template>
  <section class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
    <section class="mb-4 pl-2">
      <WidgetsBreadcrumb :breadcrumb/>
    </section>
    <WidgetsTitle>Par filière <i class="text-carto-pink">{{ tag?.name }}</i></WidgetsTitle>
    <p class="text-carto-gray300 m-4">{{ tag?.description }}</p>
    <ListTitle :count="items?.length"/>
    <div v-if="items?.length > 0">
      <ul class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-4 lg:gap-x-4 mt-4">
        <li class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white45"
            v-for="fiche in items" :key="fiche.id">
          <ShopItem :fiche/>
        </li>
      </ul>
    </div>
    <div class="prose lg:prose-xl" v-if="items?.length === 0">
      Rien n'a été trouvé :-(
    </div>
  </section>
</template>