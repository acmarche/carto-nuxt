<script setup lang="ts">
import {IconCat} from '@tabler/icons-vue';

const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()

</script>
<template>
  <section class="flex flex-col">

    <p v-for="secteur in shop.classements" class="flex flex-row items-center  gap-2" :key="secteur.id">
      <IconCat class="h-8 w-8" aria-hidden="true"/>
      <span>{{ secteur.name }}</span>
    </p>

    <p v-for="(tag,key,index) in shop.tags" class="flex flex-row items-center gap-2" :key="index">
      <IconCat class="h-8 w-8" aria-hidden="true"/>
      <span>{{ tag }}</span>
    </p>

  </section>
</template>