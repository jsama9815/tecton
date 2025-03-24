<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRoute } from "vue-router";
import { computed, ref, onMounted, onBeforeUnmount, watchEffect } from "vue";
import navBar from "./components/navBar.vue";
import phoneComponentMenu from "./components/phoneComponentMenu.vue";

const route = useRoute();
const currentRoute = computed(() => route.name);
const screenWidth = ref(window.innerWidth);
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
const isPhoneView = computed(() => screenWidth.value <= 1024);
</script>

<template>
  <component :is="isPhoneView ? phoneComponentMenu : navBar" :currentRoute="currentRoute"/>
  <RouterView />
</template>

<style>
a {
  text-decoration: none;
  color: inherit;
}
a:visited {
  color: inherit;
}
html, body {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
}
</style>