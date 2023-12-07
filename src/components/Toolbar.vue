<template>
  <v-toolbar color="blue-darken-3">
    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn to="/" exact> Home </v-btn>
    <v-btn to="/users"> Users </v-btn>
    <v-btn to="/repositories"> Repositories </v-btn>
  </v-toolbar>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Search GitHub");
</script>
