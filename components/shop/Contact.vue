<script setup lang="ts">
import {IconDeviceMobile, IconMail, IconPhone, IconWheelchair} from '@tabler/icons-vue';
import {prettyPhone} from "~/composables/stringUtils";
const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()
</script>
<template>
  <section class="flex flex-col">
    <h4 class="text-lg flex flex-row gap-2">
      <span class=" lobster-two-bold">Contactez-nous</span>
    </h4>
    <p v-if="shop.telephone" class="flex flex-row justify-between p-2" title="Téléphone">
      <IconPhone class="h-8 w-8" aria-hidden="true"/>
      <a :href="`tel:${shop.telephone}`" class="hover:text-carto-pink hover:opacity-80">{{ shop.telephone }}</a>
    </p>
    <p v-if="shop.gsm" class="flex flex-row justify-between p-2">
      <IconDeviceMobile class="h-8 w-8"/>
      <a :href="`tel:${prettyPhone(shop.cap?.gsm)}`" class="hover:text-carto-pink hover:opacity-80">
        {{ prettyPhone(shop.gsm) }}
      </a>
    </p>
    <p v-if="shop.email" class="flex flex-row justify-between p-2">
      <IconMail class="h-8 w-8"/>
      <a :href="`mailto:${shop.email}`" class="hover:text-carto-pink hover:opacity-80">
        {{ shop.email }}
      </a>
    </p>
    <p v-if="shop.pmr" class="flex flex-row p-2" title="Accès aux personnes à mobilité réduite">
      <IconWheelchair class="h-8 w-8 flex-shrink-0 text-white " aria-hidden="true"/>
    </p>
  </section>
</template>