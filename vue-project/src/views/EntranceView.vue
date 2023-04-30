<script setup lang="ts"></script>

<template>
  <div class="hero">
    <video autoplay loop muted plays-inline class="back-video">
      <source src="/src/assets/images/homePage/pexels-cottonbro-10548180.92295c9c_compressed.mp4" type="video/mp4" />
    </video>
    <div class="container">
      <h1 class="content branding">Scarlatta Fortuna</h1>
      <div class="center">
        <router-link style="text-decoration: none;" to="/home">
          <button class="explore btn">
            <svg width="200px" height="80px" viewBox="0 0 200 80" class="border">
              <polyline points="199,1 199,79 1,79 1,1 199,1" class="bg-line" />
              <polyline points="199,1 199,79 1,79 1,1 199,1" class="hl-line" />
            </svg>
            <span>EXPLORE</span>
          </button></router-link>
      </div>
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
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(12, 3, 51, 0.3), rgba(12, 3, 51, 0.3));
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.content {
  text-align: center;
  font-size: 160px;
}

.center {
  width: 200px;
  height: 80px;
  position: absolute;
}

.explore {
  color: var(--primary-brand-color);
  font-size: 24px;
  letter-spacing: 0.2rem;
}

.btn {
  width: 200px;
  height: 80px;
  background: transparent;
  border: 1px solid var(--primary-brand-color);
  transition: 1s ease-in-out;
  margin-top: 4rem;
}

svg {
  position: absolute;
  left: 0;
  top: 50;
  fill: none;
  stroke: var(--font-btn-color);
  stroke-dasharray: 150 560;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
}

.btn:hover {
  background: rgba(219, 163, 154, 0.3);
  transition: background-color 1s ease-in-out;
  color: var(--font-btn-color);
}

.btn:hover svg {
  stroke-dashoffset: -560;
}

.back-video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -99;
}
</style>