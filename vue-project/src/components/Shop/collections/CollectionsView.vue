<script setup lang="ts"></script>

<template>
  <div class="low-opacity-bg-image">
    <p class="hero-heading">Our Collections</p>
  </div>
  <div class="hero-section">
    <p class="hero-copy">Discover our fashion collections, where style meets creativity and innovation. Each collection is
      carefully crafted
      to bring you the latest fashion trends and styles, all while offering unique and original pieces that will make you
      stand out from the crowd. From classic and timeless pieces to bold and daring designs, our collections cater to
      every taste and preference. With quality materials, meticulous attention to detail, and expert craftsmanship, our
      collections are not just about fashion, but also about quality and durability. Explore our collections today and
      find your new fashion favorites.</p>
  </div>
  <main class="page-content">
    <div class="card">
      <div class="content">
        <h2 class="title">FIELDS</h2>
        <p class="copy">Drawing inspiration from the natural beauty and simplicity of rural
          landscapes, featuring flowing silhouettes, earthy tones, and soft textures that evoke a sense of tranquility and
          harmony with nature.</p>
        <button class="btn fun">Shop Now</button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">INTROSPECTION</h2>
        <p class="copy">Featuring sleek lines, minimalist designs, and neutral colors to highlight the beauty of
          simplicity, to explore your individuality and to focus on embracing your unique style.</p>
        <button class="btn fun">Shop Now</button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">WONDERLAND</h2>
        <p class="copy">Whimsical modern designs creating a dreamy, ethereal aesthetic. Sparkling embellishments, delicate
          lace, and intricate embroidery will transport you to a fantastical wonderland.</p>
        <button class="btn fun">Shop Now</button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">CITY LIFE</h2>
        <p class="copy">Inspired by the energy and vibrancy of urban landscapes, showcasing bold,
          edgy designs and daring prints that reflect the fast-paced and dynamic nature of city life and the
          confidence of the modern urbanite.</p>
        <button class="btn fun">Shop Now</button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">DRAMA</h2>
        <p class="copy">Make a statement with bold and daring designs that demand attention. From dramatic silhouettes to
          eye-catching details, it's all about creating unforgettable fashion moments that are sure to leave an
          impression.</p>
        <button class="btn fun">Shop Now</button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2 class="title">TIMELESS</h2>
        <p class="copy">Experience the enduring elegance of classic designs that never go out of style. Clean lines,
          luxurious fabrics, and impeccable tailoring offering timeless pieces that you can wear season after season, year
          after year.</p>
        <button class="btn fun">Shop Now</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.low-opacity-bg-image {
  --bg-image: url(/src/assets/images/collections/pexels-cottonbro-studio-10037692.jpg);
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
  background-position: center 60%;
}

.hero-heading {
  color: var(--primary-brand-color);
  margin-bottom: 20rem;
}

:root {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
}

.page-content {
  display: grid;
  gap: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  inline-size: min(100% - 2rem, 50rem);
  margin-inline: auto;
  padding-bottom: 2rem;
}

.btn {
  width: fit-content;
  margin-inline: auto;
}

.card {
  display: grid;
  grid-template-columns: subgrid;
  position: relative;
  overflow: hidden;
  padding: 1rem;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
}

.card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-size: cover;
  transition: transform 700ms ease-in-out;
  pointer-events: none;
}

.card:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  pointer-events: none;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.320) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.540) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.790) 100%);
  transition: transform 700ms ease-in-out;
}

.card:nth-child(1):before {
  background-image: url(/src/assets/images/collections/pexels-cottonbro-studio-10679218.jpg);
  background-position: center;
}

.card:nth-child(2):before {
  background-image: url(/src/assets/images/collections/pexels-cottonbro-studio-10545031.jpg);
  background-position: center;
}

.card:nth-child(3):before {
  background-image: url(/src/assets/images/collections/pexels-cottonbro-studio-6551790.jpg);
  background-position: center;
}

.card:nth-child(4):before {
  background-image: url(/src/assets/images/collections/pexels-cottonbro-studio-10669647.jpg);
  background-position: center;
}

.card:nth-child(5):before {
  background-image: url(/src/assets/images/collections/pexels-cottonbro-studio-9210389.jpg);
  background-position: center;
}

.card:nth-child(6):before {
  background-image: url(/src/assets/images/collections/pexels-jackline-addis-ababa-12311948.jpg);
  background-position: center;
}

.content {
  display: grid;
  grid-template-columns: subgrid;
  padding: 1rem;
  transition: transform 700ms ease-in-out;
  z-index: 1;
}

.content>*+* {
  margin-top: 1rem;
}

.title {
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
}

.copy {
  font-family: "Cormorant", serif;
  font-weight: 400;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.35;
}

@media (hover: hover) and (min-width: 600px) {
  .card:after {
    transform: translateY(0);
  }

  .content {
    transform: translateY(calc(100% - 4.5rem));
  }

  .content>*:not(.title, .btn) {
    opacity: 0;
    transform: translateY(1rem);
    transition: transform var(--d) var(--e), opacity var(--d) var(--e);
  }

  .card:hover,
  .card:focus-within {
    align-items: center;
  }

  .card:hover:before,
  .card:focus-within:before {
    transform: translateY(-4%);
  }

  .card:hover:after,
  .card:focus-within:after {
    transform: translateY(-50%);
  }

  .card:hover .content,
  .card:focus-within .content {
    transform: translateY(0);
  }

  .card:hover .content>*:not(.title),
  .card:focus-within .content>*:not(.title) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(var(--d) / 8);
  }

  .card:focus-within:before,
  .card:focus-within:after,
  .card:focus-within .content,
  .card:focus-within .content>*:not(.title) {
    transition-duration: 0s;
  }
}
</style>