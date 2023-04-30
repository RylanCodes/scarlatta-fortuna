<script setup lang="ts">
</script>

<template>
  <img src="/src/assets/images/homePage/pexels-reginaldo-g-martins-3744466.jpg" />
</template>

<style scoped>
img {
  width: 100%;
  height: 900px;
  object-fit: cover;
  object-position: top;
}

@media screen and (max-width: 1050px) {
  img {
    height: 500px;
  }
}

@media screen and (max-width: 850px) {
  img {
    height: 400px;
  }
}

@media screen and (max-width: 400px) {
  img {
    height: 300px;
  }
}
</style>