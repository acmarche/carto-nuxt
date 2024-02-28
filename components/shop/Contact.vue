<script setup lang="ts">
import {IconDeviceMobile, IconLocation, IconMail, IconPhone, IconWheelchair} from '@tabler/icons-vue';

const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()

function prettyPhone(phone: string) {
  return `+32 ${phone}`
}
</script>
<template>
  <section class="flex flex-col">
    <h4 class="text-lg flex flex-row gap-2">
      <span class=" lobster-two-bold">Contactez-nous</span>
    </h4>

    <p v-if="shop.telephone" class="flex flex-row gap-2" title="Téléphone">
      <IconPhone class="h-8 w-8" aria-hidden="true"/>
      <a :href="`tel:${shop.telephone}`">{{ shop.telephone }}</a>
    </p>

    <p v-if="shop.gsm" class="flex flex-row justify-between p-2">
      <IconDeviceMobile/>
      <a :href="`tel:${prettyPhone(shop.cap?.gsm)}`">
        {{ prettyPhone(shop.gsm) }}
      </a>
    </p>

    <p v-if="shop.email" class="flex flex-row justify-between p-2">
      <IconMail/>
      <a :href="`mailto:${shop.email}`" class="hover:text-white hover:opacity-80">
        {{ shop.email }}
      </a>
    </p>

    <p v-if="shop.pmr" class="flex flex-row p-2" title="Accès aux personnes à mobilité réduite">
      <IconWheelchair class="h-8 w-8 flex-shrink-0 text-white " aria-hidden="true"/>
    </p>

  </section>
</template>