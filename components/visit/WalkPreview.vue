<script setup>
import {IconNavigation} from "@tabler/icons-vue";

const previewOpen = defineModel('previewOpen')
const codeCgt = defineModel('codeCgt')
const {
  pendingOffer,
  offer,
  errorOffer
} = offerGet(codeCgt)

watch(() => codeCgt, (newValue, oldValue) => {
  console.log(newValue)
})

</script>
<template>
  <!--
    offer Details dialog
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
            <VisitHeaderPreview v-model:preview-open="previewOpen" :name="offer?.nom ?? 'Loading...'">
              <address class="flex flex-row items-center gap-2" v-if="offer">
                <IconNavigation/>
                {{ offer.address.rue }} <br/> {{ offer.address.localite }}
              </address>
            </VisitHeaderPreview>
            <div class="flex flex-col flex-auto gap-2 p-3">
              <div v-if="errorOffer">
                {{ errorOffer }}
              </div>
              <h3 class="lg roboto-bold">DETAILS PARCOURT</h3>

            </div>
            <footer class="h-12 bg-carto-green text-white flex flex-col w-full p-3">

            </footer>
          </section>
        </div>
      </Transition>
    </div>
  </div>
</template>