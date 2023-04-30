<script setup lang="ts">
import { ref } from 'vue'

const activeOption = ref(0)

const options = [
  {
    title: 'Canada',
    subtitle: 'Toronto',
    iconClass: '',
    backgroundUrl:
      'url(/src/assets/images/stores/korie-cull-IzIME1jwjCY-unsplash.jpg)',
  },
  {
    title: 'United States',
    subtitle: 'New York',
    iconClass: '',
    backgroundUrl:
      'url(/src/assets/images/stores/qin-fan-KfqgYzoH3Vk-unsplash.jpg)',
  },
  {
    title: 'Italy',
    subtitle: 'Milan',
    iconClass: '',
    backgroundUrl:
      'url(/src/assets/images/stores/christian-wiediger-I8-T4lMCA6k-unsplash.jpg)',
  },
  {
    title: 'England',
    subtitle: 'London',
    iconClass: '',
    backgroundUrl:
      'url(/src/assets/images/stores/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg)',
  },
  {
    title: 'South Korea',
    subtitle: 'Seoul',
    iconClass: '',
    backgroundUrl:
      'url(/src/assets/images/stores/gaku-iqfXIeRbR90-unsplash.jpg)',
  },
]
</script>

<template>
  <div class="low-opacity-bg-image">
    <p class="hero-heading">Our Stores</p>
  </div>
  <div class="hero-section">
    <p class="hero-copy">Come and experience our stores for yourself! With locations in some of the most vibrant and
      exciting neighborhoods, our stores offer a unique and unforgettable shopping experience. Browse our wide selection
      of products, try on your favorites in our fitting rooms, and discover new styles that are
      sure to turn heads. Whether you're shopping for yourself or searching for the perfect gift, our stores have
      everything you need. Visit us today and see why we're the go-to destination for fashion lovers everywhere.</p>
  </div>
  <div class="options">
    <div v-for="(option, index) in options" :key="index" :class="['option', { 'active': activeOption === index }]"
      :style="{ '--optionBackground': option.backgroundUrl }" @click="activeOption = index">
      <div class="shadow"></div>
      <div class="label">
        <div class="icon">
          <i :class="option.iconClass"></i>
        </div>
        <div class="info">
          <div class="main">{{ option.title }}</div>
          <div class="sub">{{ option.subtitle }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style style scoped>
.low-opacity-bg-image {
  --bg-image: url(/src/assets/images/stores/pexels-cottonbro-studio-6764028.jpg);
  --bg-image-opacity: 1;

  display: grid;
  place-content: center;
  text-align: center;
  min-height: 400px;
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
  background-position: center 5%;
}

.hero-heading {
  color: var(--dark-color);
  margin-left: 5rem;
}

:root {
  --optionBackground: var(--defaultBackground, #E6E9ED);
}

.options {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 600px;
  max-width: 900px;
  width: calc(100% - 100px);
  height: 400px;
  margin-inline: auto;
  margin-bottom: 1rem;
}

@media screen and (max-width: 718px) {
  .options {
    min-width: 520px;
  }
}

@media screen and (max-width: 638px) {
  .options {
    min-width: 440px;
  }
}

@media screen and (max-width: 558px) {
  .options {
    min-width: 360px;
    display: grid;
  }
}

@media screen and (max-width: 478px) {
  .options {
    min-width: 280px;
  }
}

@media screen and (max-width: 398px) {
  .options {
    min-width: 200px;
  }
}

.option {
  position: relative;
  overflow: hidden;
  min-width: 60px;
  margin: 10px;
  background: var(--optionBackground);
  background-size: auto 120%;
  background-position: center;
  cursor: pointer;
  transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.option:not(.active) {
  flex-grow: 1;
  border-radius: 30px;
}

.option .shadow {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 120px;
  transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.option.active {
  flex-grow: 10000;
  transform: scale(1);
  max-width: 600px;
  margin: 0px;
  border-radius: 40px;
  background-size: auto 100%;
}

.option.active .shadow {
  box-shadow: inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
}

.option .label {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.option.active .label {
  bottom: 10px;
  left: 10px;
}

.option .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  color: white;
  white-space: pre;
}

.info>div {
  position: relative;
  transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity .5s ease-out;
}

.info .main {
  font-weight: bold;
  font-size: 1.2rem;
}

.info .sub {
  transition-delay: .1s;
}
</style>
<!-- 
This is a Vue.js component that displays a row of options with an image background, an icon, and a title and subtitle for each option. 
The active option is highlighted by a larger size and a shadow effect.
The component imports ref from the Vue.js library and uses it to create a reactive variable activeOption. 
It initializes activeOption with the value 0, indicating that the first option is active by default. 
It also defines an array of options, each with a title, subtitle, icon class, and background image URL.
The component uses a v-for directive to render the options in a loop. 
For each option, it sets the key to the index of the option in the options array, 
sets the class to option and active if the current option is the active one, 
and sets the style to --optionBackground with the URL of the option's background image.
The @click directive sets the activeOption to the current option index when the option is clicked.
The component also defines some CSS styles for the layout, background color, font, and transitions of the component. 
It uses media queries to adjust the size of the options for different screen sizes. 
The :root pseudo-class defines the --optionBackground CSS variable, which is used to set the background image of the options. 
The :not() pseudo-class is used to apply the border-radius and flex-grow styles to non-active options. 
The .shadow and .label classes define the shadow effect and the layout of the option label, respectively. -->