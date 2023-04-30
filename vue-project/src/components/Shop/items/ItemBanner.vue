<script setup lang="ts">
</script>

<template>
  <div class="banner-container">
    <div class="banner-container-grid">
      <img src="/src/assets/images/shop/banner-placeholder.jpg">
      <p>Discover our best sellers, the most expensive outfits in the world.</p>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  background: linear-gradient(to right,
      var(--primary-brand-color),
      var(--accent-color),
      var(--primary-brand-color),
      var(--light-color),
      var(--light-color),
      var(--accent-color));
}

.banner-container-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  font-size: clamp(100%, 1rem + 2vw, 2.5rem);
  margin: 0 auto;
  inline-size: min(100% - 0rem, 80rem);
}

p {
  background: -webkit-linear-gradient(var(--font-cart-color), var(--sku-color), var(--font-cart-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 415px) {
  p {
    text-align: center;
    padding-block: 1rem;
  }
}
</style> 