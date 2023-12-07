<template>
  <div>
    <Header title="Search Users"/>

    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="search">
        <v-text-field
          v-model="nameUser"
          :rules="rules"
          label="User name"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2">Search</v-btn>
      </v-form>
    </v-sheet>

    <br>
    <v-divider inset></v-divider>
    <br>
    
    <v-row align="center" justify="center">
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import UserCard from "../components/UserCard.vue";
import Header from "../components/Header.vue";

const nameUser = ref("");
const users = ref([]);

const search = () => {
  if (nameUser.value !== "") {
    const url = `https://api.github.com/search/users?q=${nameUser.value}`;
    axios.get(url).then((response) => (users.value = response.data.items));
    nameUser.value = "";
  }
};
</script>
