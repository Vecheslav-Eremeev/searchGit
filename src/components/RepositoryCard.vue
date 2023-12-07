<template>
  <v-col cols="auto">
    <v-card
      class="mx-auto"
      max-width="344"
      :title="repository.name"
      :subtitle="repository.language"
      :prepend-avatar="repository.owner.avatar_url"
      :href="repository.html_url"
      target="_blank"
    >
    </v-card>
  </v-col>
</template>

<script setup>
const props = defineProps(["repository"]);
</script>
