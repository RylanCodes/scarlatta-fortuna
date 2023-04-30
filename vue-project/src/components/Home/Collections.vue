<script setup lang="ts">
</script>

<template>
  <div class="content flow">
    <h1 class="title">FEATURED COLLECTIONS</h1>
    <div class="even-columns">
      <div class="hover">
        <router-link to="/collections"><img src="/src/assets/images/homePage/pexels-cottonbro-studio-10679201.jpg"
            alt="beige collection"></router-link>
      </div>
      <div class="hover">
        <router-link to="/collections"><img src="/src/assets/images/homePage/pexels-cottonbro-studio-10548132.jpg"
            alt="colorful collection"></router-link>
      </div>
      <div class="hover">
        <router-link to="/collections"><img src="/src/assets/images/homePage/pexels-cottonbro-studio-10545225.jpg"
            alt="black and white collection"></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.even-columns {
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-inline: auto;

}

.grid-container {
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  inline-size: min(100% - 1rem, 95rem);
  margin-inline: auto;
}

h1 {
  background: linear-gradient(to right,
      var(--accent-color),
      var(--primary-brand-color),
      var(--accent-color));
  color: var(--font-btn-color);
  font-size: 2rem;
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 0.5rem;
}

.content {
  margin-bottom: 0.5rem;
}
</style>