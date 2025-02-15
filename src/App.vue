<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from "vue-router";
import { computed } from "vue";
import navBar from "./components/navBar.vue";

const route = useRoute();
const currentRoute = computed(() => route.name);
</script>

<template>
  <navBar :currentRoute = "currentRoute"/>
  <RouterView />
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
}
</style>