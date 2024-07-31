<script setup>
defineProps({count: {type: Number, default: 0, required: true}});
</script>
<template>
  <h2 class="text-xl lg:text-3xl text-carto-pink px-3 my-2"
      id="count-result">
    {{ count }} acteurs et intervenants trouvés
  </h2>
</template>