<script setup lang="ts"></script>

<template>
  <!-- <div class="container">
    <div class="infinite-scrolling"></div>
  </div> -->
</template>

<style scoped>
.container {
  overflow: hidden;
}

.infinite-scrolling {
  background: url("/images/pexels-cottonbro-studio-4614107.jpg") repeat-x;
  height: 645px;
  width: 5760px;
  /* The image width times 3 */
  animation: slide 60s linear infinite;
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-1920px, 0, 0);
    /* The image width */
  }
}
</style>