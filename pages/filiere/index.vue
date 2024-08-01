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
const name = ref('Toutes les filières')
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
</script>
<template>
  <section class="mx-auto max-w-full px-2 py-8 sm:px-6 sm:py-12 lg:px-8">
    <WidgetsTitle>Par filière</WidgetsTitle>
    <WidgetsLoader v-if="status==='pending'"/>
    <WidgetsError :error="error.message" v-if="error"/>
    <div v-if="data">
      <ul>
        <li v-for="(items,groupName, index) in data.filters" :key="index" class="m-3">
          <span class="font-semibold text-xl" v-if="groupName !== 'localite'">
            {{ groupName }}
          </span>
          <div class="flex flex-col md:flex-row gap-2 pl-3 mt-3"
               v-if="groupName !== 'localite'">
            <WidgetsLink
                v-for="tag in items"
                :to="`/filiere/${tag.slug}`">
              {{ tag.name }}
            </WidgetsLink>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>