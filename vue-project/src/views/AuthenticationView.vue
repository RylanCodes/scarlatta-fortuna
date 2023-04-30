<script setup lang="ts">
import LoginUser from "../components/Authentication/LoginUser.vue";
import AdBanner from "../components/Authentication/AdBanner.vue";
import RegisterUser from "../components/Authentication/RegisterUser.vue";
</script>

<template>
  <div class="low-opacity-bg-image">
    <p class="hero-heading">My Account</p>
  </div>
  <div class="grid-container">
    <LoginUser />
    <AdBanner />
    <RegisterUser />
  </div>
</template>

<style scoped>
.low-opacity-bg-image {
  --bg-image: url(/src/assets/images/account/pexels-archifashiondesign-9573704.jpg);
  --bg-image-opacity: 1;

  display: grid;
  place-content: center;
  text-align: center;
  min-height: 500px;
  position: relative;
  isolation: isolate;
}

.low-opacity-bg-image::after {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  opacity: var(--bg-image-opacity);
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center 40%;
}

.hero-heading {
  color: var(--dark-color);
  margin: 1rem 0rem 26rem 2rem;
}

.grid-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  inline-size: min(100% - 2rem, 70rem);
  margin-inline: auto;
  padding: 4rem 0 6rem 0;
}

@media screen and (max-width: 995px) {
  .grid-container {
    inline-size: min(100% - 2rem, 30rem);
  }
}
</style>