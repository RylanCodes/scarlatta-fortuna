<template>
  <div class="low-opacity-bg-image">
    <div class="flex-column-align shadow">
      <p class="hero-heading">404</p>
      <h1 class="alert-message">Sorry, something went wrong, the requested page was not found.</h1>
      <router-link style="text-decoration: none;" to="/items">
        <button type="button" class="btn fun lighter">CONTINUE SHOPPING</button>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.low-opacity-bg-image {
  --bg-image: url(/src/assets/images/shop/pexels-cottonbro-studio-10547287-cropped3.jpg);
  --bg-image-opacity: 1;

  display: grid;
  place-content: center;
  text-align: center;
  min-height: 575px;
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
  background-position: center 45%;
}

.hero-heading {
  color: var(--dark-color);
}
.flex-column-align {
  padding: 1rem;
}

/* .shadow {
  background: rgba(255, 255, 255, 0.5);
} */
</style>