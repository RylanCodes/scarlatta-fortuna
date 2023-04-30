<script setup lang="ts">
import Header from "./components/Header/HeaderView.vue";
import Footer from "./components/Footer/FooterView.vue";
import { RouterView, useRoute } from "vue-router";
const Router = useRoute();
</script>

<template>
  <Header v-if="Router.name != 'intro'" />
  <RouterView />
  <Footer v-if="Router.name != 'intro'" />
</template>

<style>
@import "@/assets/styles.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>