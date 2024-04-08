<script setup>
const projets = [
  {
    name: 'Accueils enfance',
    description: 'Gestion des garderies du mercredi et petites plaines (carnaval,paques...)',
    stacks: ['php', 'symfony', 'stimulus-js', 'getbootstrap-css', 'phpstan', 'phpunit'],
    images: ['mercredi'],
    source: 'https://github.com/acmarche/mercredi',
    id: 1
  },
  {
    name: 'Administration de la plate-forme des commerçant locaux',
    description: 'Mis en place paiement en ligne viva wallet',
    stacks: ['php', 'symfony', 'stimulusjs', 'getbootstrap-css'],
    images: ['capsf'],
    source: 'https://github.com/jfsenechal/cap-symfony',
    url: 'https://cap.marche.be',
  },
  {
    name: 'Application mobile', description: 'Application pour la gestion des avaloirs', stacks: ['kotlin', 'compose'],
    images: ['mobile'],
    source: 'https://github.com/acmarche/apptravaux-android',
  },
  {
    name: 'Mise en avant circuits courts',
    description: 'Les commerçants pronant le local',
    stacks: ['nuxtjs', 'tailwindcss'],
    images: ['carto'],
    source: 'https://github.com/acmarche/carto-nuxt',
    url: 'https://circuit-court.marche.be/',
  },
  {
    name: 'Site des commerçants',
    description: 'Version en nuxt. Non mis en production',
    stacks: ['nuxtjs', 'tailwindcss'],
    images: ['capnuxt'],
    source: 'https://github.com/acmarche/cap-nuxt',
  },
  {
    name: 'Thème wordpress',
    description: 'Site du Tourisme',
    stacks: ['wordpress', 'tailwindcss', 'alpinejs'],
    images: [],
    source: 'https://github.com/acmarche/visit-tailwind-wp',
    url: 'https://visitmarche.be',
  },
  {
    name: 'Contribution projet open source',
    description: 'Modification pour le rendre compatible avec symfony7',
    stacks: ['php', 'symfony', 'phpstan', 'phpunit'],
    images: [],
    source: 'https://github.com/jfsenechal/DoctrineBehaviors',
  },
];
</script>
<template>
  <section>
    <div v-for="project in projets"
         class="block max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h3 class="text-xl font-semibold">{{ project.name }}</h3>
      <p class="my-2">{{ project.description }}</p>
      <div>
        <span class="font-bold text-md">Technologies</span> <span
          class="border-body-color text-body-color m-2 inline-block rounded-full border px-2.5 py-1 text-xs font-medium"
          v-for="stack in project.stacks">{{ stack }}
      </span>
      </div>
      <p class="font-bold text-md">Source: <a :href="project.source">{{ project.source }}</a></p>
      <p v-if="project.url">Démo <a :href="project.url">{{ project.url }}</a></p>

      <div class="grid grid-cols-2 gap-4">
        <div v-for="i in 4">
          <a :href="`/images/cblue/${project.images[0]}/${i}.png`">
            <img class="h-auto max-w-full rounded-lg" :src="`/images/cblue/${project.images[0]}/${i}.png`" alt="">
          </a>
        </div>
      </div>

    </div>
  </section>
</template>