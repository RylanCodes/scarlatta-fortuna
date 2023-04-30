<script setup lang="ts"></script>

<template>
  <div class="hero">
    <video autoplay loop muted plays-inline class="back-video">
      <source src="/src/assets/images/homePage/pexels-cottonbro-10677479_compressed.mp4" type="video/mp4" />
    </video>
    <div class="content">
      <h1>Our Story</h1>
      <router-link to="/about-us">Discover More</router-link>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: inherit;
  font-family: "Prata", serif;
}

.hero {
  width: 100%;
  height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 0.5rem;
}

video {
  max-width: 100%;
}

.content {
  text-align: center;
}

.content h1 {
  font-size: 4rem;
  line-height: 8rem;
  color: var(--primary-brand-color);
  font-weight: 600;
}

.content a {
  display: inline-block;
  color: var(--primary-brand-color);
  font-size: 1.6rem;
  text-decoration: underline var(--primary-brand-color);
  text-underline-offset: 8px;
}

.content a:hover {
  color: var(--font-btn-color);
  text-decoration: underline var(--font-btn-color);
}

.back-video {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
}
</style>