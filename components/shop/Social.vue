<script setup lang="ts">
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
  IconWorld
} from '@tabler/icons-vue';

const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()

</script>
<template>
  <section class="flex flex-row gap-2">
    <NuxtLink v-if="shop.website"
              :to="shop.website"
              class="hover:text-carto-pink hover:opacity-80 p-2"
              title="Accédez à notre site">
      <IconWorld/>
    </NuxtLink>

    <NuxtLink v-if="shop.facebook" class="hover:text-carto-pink hover:opacity-80 p-2"
              :to="shop.facebook"
              target="_blank"
              title="Rejoignez-nous sur Facebook">
      <IconBrandFacebook/>
    </NuxtLink>

    <NuxtLink v-if="shop.youtube" class="hover:text-carto-pink hover:opacity-80 p-2"
              :to="shop.youtube"
              target="_blank"
              title="Rejoignez-nous sur Youtube">
      <IconBrandYoutube/>
    </NuxtLink>

    <NuxtLink v-if="shop.tiktok" class="hover:text-carto-pink hover:opacity-80 p-2"
              :to="shop.tiktok"
              target="_blank"
              title="Rejoignez-nous sur Tiktok">
      <IconBrandTiktok/>
    </NuxtLink>

    <NuxtLink v-if="shop.twitter" class="hover:text-carto-pink hover:opacity-80 p-2"
              :to="shop.twitter"
              target="_blank"
              title="Rejoignez-nous sur Twitter">
      <IconBrandX/>
    </NuxtLink>

    <NuxtLink v-if="shop.linkedin" class="hover:text-carto-pink hover:opacity-80 p-2"
              :to="shop.linkedin"
              target="_blank"
              title="Rejoignez-nous sur Linkedin">
      <IconBrandLinkedin/>
    </NuxtLink>

  </section>
</template>