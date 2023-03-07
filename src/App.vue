<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div w-prose m-auto my-0 px-4>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
