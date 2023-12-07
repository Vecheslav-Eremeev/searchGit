<template>
  <div>
    <Header title="Search Repositories"/>

    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="search">
        <v-text-field
          v-model="nameRepository"
          :rules="rules"
          label="Repository name"
        ></v-text-field>
        <v-text-field
          v-model.number="count"
          :rules="rules"
          label="Count repositories"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2">Search</v-btn>
      </v-form>
    </v-sheet>

    <br>
    <v-divider></v-divider>
    <br>

    <v-row align="center" justify="center">
      <RepositoryCard
        v-for="repository in repositories"
        :key="repository.id"
        :repository="repository"
      />
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import RepositoryCard from "../components/RepositoryCard.vue";
import Header from "../components/Header.vue";

const nameRepository = ref("");
const repositories = ref([]);
const count = ref(42);

const search = () => {
  if (nameRepository.value !== "") {
    const url = `https://api.github.com/search/repositories?q=${nameRepository.value}&per_page=${count.value}`;
    axios
      .get(url)
      .then((response) => (repositories.value = response.data.items));
    nameRepository.value = "";
  }
};
</script>
