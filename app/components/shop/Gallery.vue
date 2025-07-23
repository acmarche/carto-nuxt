<script setup lang="ts">
const config = useRuntimeConfig()
const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()
</script>
<template>
  <section class="grid gap-4 lg:grid-cols-2">
    <div class="scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700"
         v-for="(image,index) in shop.images" :key="index">
    <img
        :src="`${config.public.BOTTIN_URL}/bottin/fiches/${shop.id}/${image.image_name}`"
        alt="icon"
        class="w-full h-96 object-cover bg-slate-300 rounded"
    />
    </div>
  </section>
</template>