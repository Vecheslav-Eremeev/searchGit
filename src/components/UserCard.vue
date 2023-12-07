<template>
  <v-col cols="auto">
    <v-card
      class="mx-auto"
      max-width="344"
      :title="user.login"
      :prepend-avatar="user.avatar_url"
      :href="user.html_url"
      target="_blank"
    >
    </v-card>
  </v-col>
</template>

<script setup>
const props = defineProps(["user"]);
</script>
