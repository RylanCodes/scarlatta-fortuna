<script setup lang="ts">
import { ref, onMounted, Transition } from 'vue';

const showModal = ref(false);

onMounted(() => {
  setTimeout(() => {
    showModal.value = true;
  }, 3000);
});

</script>

<template>
  <Transition name="fade">
    <section v-if="showModal" class="modal">
      <div class="hero modal-content">
        <span @click="showModal = false" class="close">&times;</span>
        <p class="hero__headline">STAY IN TOUCH</p>
        <p class="hero__text">
          Sign up to our newsletter and keep buying expensive clothes.
        </p>
        <a class="hero__button btn fun" href="#" target="_blank">SIGN UP</a>
      </div>
    </section>
  </Transition>
</template>

<style scoped>
.hero {
  border: 1px solid var(--light-color);
  border-radius: 5px;
  box-shadow: inset 0 0 1px 1px hsl(3.7, 47.4%, 73.1%),
    10px 10px 60px 20px hsl(3.7, 47.4%, 73.1%, 0.4);
  background: hsla(25.7, 34.1%, 83.9%, 0.9);
}

@supports (backdrop-filter: blur(45px) brightness(200%)) {
  .hero {
    background: hsla(25.7, 34.1%, 83.9%, 0.5);
    backdrop-filter: blur(45px) brightness(200%);
  }
}

.hero__headline {
  font-size: 3rem;
  line-height: 1.1;
  color: var(--dark-color);
}

@supports (background-clip: text) {
  .hero__headline {
    color: transparent;
    background-image: linear-gradient(45deg,
        var(--primary-brand-color),
        var(--accent-color),
        var(--primary-brand-color),
        var(--accent-color));
    background-clip: text;
  }
}

.hero__text {
  margin: 1.5rem 0;
  color: var(--dark-color);
  max-width: 50ch;
  font-size: 1.5rem;
}

.hero__button {
  margin: 2rem 0 0;
  padding: 0.8rem 1.2rem;
  display: block;
  width: fit-content;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
}

.hero__button:hover {
  filter: brightness(120%);
}

@media (max-width: 800px) {
  html {
    font-size: 0.8rem;
  }

  .hero__headline {
    font-size: 2.5rem;
  }
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.modal-content {
  display: block;
  margin: 18% auto;
  padding: 20px;
  border: 1px solid var(--light-color);
  width: 100%;
  max-width: 700px;
}

.close {
  color: var(--dark-color);
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: var(--light-color);
  text-decoration: none;
  cursor: pointer;
}

/* Transition styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>