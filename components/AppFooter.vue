<script setup lang="ts">
</script>
<template>
  <footer class="bg-carto-gray200">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-4 sm:py-12 lg:px-8">
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div class="pb-6">
          <NuxtLink to="/" class="leading-6 text-white hover:text-">Carte</NuxtLink>
        </div>
        <div class="pb-6">
          <NuxtLink to="/acteur" class="leading-6 text-white">Liste</NuxtLink>
        </div>
        <div class="pb-6">
          <NuxtLink to="/geolocalisation" class="leading-6 text-white">Autour de moi
          </NuxtLink>
        </div>
        <div class="pb-6">
          <NuxtLink to="/about" class="leading-6 text-white ">A propos de</NuxtLink>
        </div>
        <div class="pb-6">
          <NuxtLink to="/filiere" class="leading-6 text-white">Par filière</NuxtLink>
        </div>
        <div class="pb-6">
          <NuxtLink to="/localite" class="leading-6 text-white ">Par localité</NuxtLink>
        </div>
      </nav>
      <p class="mt-10 text-center leading-5">
        <NuxtLink to="https://www.marche.be/administration/rgpd">
          &copy; 2024 Marche-en-Famenne, Administration communale. Tous droits réservés.
        </NuxtLink>
      </p>
    </div>
  </footer>
</template>