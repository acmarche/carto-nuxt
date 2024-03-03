<script setup>
import {IconNavigation} from "@tabler/icons-vue";
const previewOpen = defineModel('previewOpen')
const shopRef = defineModel('shopRef')
const {
  pendingShop,
  shop,
  errorShop
} = shopGet(shopRef)
</script>
<template>
  <!--
    shop Details dialog
  -->
  <div v-show="previewOpen" class="relative z-[1000]" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <Transition enter-active-class="transition-opacity ease-linear duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity ease-linear duration-300"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0">
      <div v-show="previewOpen" class="fixed inset-0 bg-carto-main bg-opacity-25 backdrop-blur-sm"></div>
    </Transition>
    <div class="fixed inset-0 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
      <Transition
          enter-active-class="transition ease-in-out duration-300 transform"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition ease-in-out duration-300 transform"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full">
        <div v-show="previewOpen"
             class="relative ml-auto flex h-full w-full max-w-md flex-col overflow-y-auto bg-white shadow-xl">
          <section class="flex flex-col w-full h-full">
            <widgets-error :error="errorShop.message" v-if="errorShop"/>
            <template v-if="shop">
              <header class="h-28 bg-carto-green text-white flex flex-col w-full p-3">
                <template class="flex flex-row justify-between ">
                  <h2 class="text-2xl lobster-two-bold">{{ shop.societe ?? 'Chargement' }}</h2>
                  <button type="button"
                          class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-white hover:text-carto-gray300"
                          @click="previewOpen = false">
                    <span class="sr-only">Fermer le menu</span>
                    <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </template>
                <div v-if="pendingShop">Loading</div>
                <address class="flex flex-row items-center gap-2">
                  <IconNavigation/>
                  {{ shop.rue }} {{ shop.numero }} <br/> {{ shop.localite }}
                </address>

              </header>
              <div class="flex flex-col flex-auto gap-2 p-3">
                <h3 class="lg roboto-bold">INFORMATIONS GÉNÉRALES</h3>
                <ShopContact :shop/>
                <ShopSocial :shop/>
                <h3 class="lg lobster-two-bold">SECTEURS</h3>
                <ShopSecteur :shop/>
                <p>{{ shop.comment1 }}</p>
              </div>
            </template>
            <footer class="h-12 bg-carto-green text-white flex flex-col w-full p-3">

            </footer>
          </section>
        </div>
      </Transition>
    </div>
  </div>
</template>