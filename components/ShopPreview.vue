<script setup>
import {IconNavigation} from "@tabler/icons-vue";

const previewOpen = defineModel('previewOpen')
const shopRef = defineModel('shopRef')
const {
  pendingShop,
  shop,
  errorShop
} = shopGet(shopRef)
const {
  progress,
  isLoading,
} = useLoadingIndicator();

function formatTextWithLineBreaks(text) {
  if (!text) return ''
  if (text) {
    return text.replace(/\n/g, '<br>');
  }
}
</script>
<!--  x-transition:enter="transition ease-in-out duration-300 transform"
             x-transition:enter-start="translate-x-full"
             x-transition:enter-end="translate-x-0"
             x-transition:leave="transition ease-in-out duration-300 transform"
             x-transition:leave-start="translate-x-0"
             x-transition:leave-end="translate-x-full"
-->
<!--
 x-transition:enter="transition-opacity ease-linear duration-300"
           x-transition:enter-start="opacity-0"
           x-transition:enter-end="opacity-100"
           x-transition:leave="transition-opacity ease-linear duration-300"
           x-transition:leave-start="opacity-100"
           x-transition:leave-end="opacity-0"
-->
<style>
.trans1-enter-from {
  @apply opacity-0
}

.trans1-enter-active {
  @apply transition-opacity ease-linear duration-300
}

.trans1-enter-to {
  @apply opacity-100
}

.trans1-leave-from {
  @apply opacity-100
}

.trans1-leave-active {
  @apply transition-opacity ease-linear duration-300
}

.trans1-leave-to {
  @apply opacity-0
}

.trans2-enter-from {
  @apply translate-x-full
}

.trans2-enter-active {
  @apply transition ease-in-out duration-300 transform
}

.trans2-enter-to {
  @apply translate-x-0
}

.trans2-leave-from {
  @apply translate-x-0
}

.trans2-leave-active {
  @apply transition ease-in-out duration-300 transform
}

.trans2-leave-to {
  @apply translate-x-full
}
</style>
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
    <Transition name="trans1">
      <div v-show="previewOpen" class="fixed inset-0 bg-carto-main bg-opacity-25 backdrop-blur-sm"></div>
    </Transition>
    <div class="fixed inset-0 z-40 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
      <Transition name="trans2">
        <div v-show="previewOpen"
             class="relative ml-auto flex h-full w-full max-w-md flex-col overflow-y-auto bg-white shadow-xl">
          <section class="flex flex-col w-full h-full">
            <div v-if="pendingShop">Loading</div>
            <widgets-error :error="errorShop.message" v-if="errorShop"/>
            <template v-if="shop">
              <header class="h-28 bg-carto-green text-white flex flex-col w-full p-3">
                <template class="flex flex-row justify-between ">
                  <h2 class="text-2xl lobster-two-bold">{{ shop.societe }}</h2>
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