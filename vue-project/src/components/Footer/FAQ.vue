<script setup lang="ts">
import { ref } from 'vue';

const hoverClass = ref('');

function addClass() {
  hoverClass.value = 'hover';
}

function removeClass() {
  hoverClass.value = '';
}
</script>

<template>
  <div class="low-opacity-bg-image">
    <p class="hero-heading">FAQ</p>
  </div>
  <div class="hero-section">
    <p class="hero-copy">We want to make sure that you have all the information you need to shop with confidence at our
      store. That's why we've compiled a list of frequently asked questions that we hope will help answer any queries
      you might have. If you can't find what you're looking for, don't hesitate to contact us directly. Our customer
      service team is always here to help and will be happy to assist you with any questions or concerns you may have.
      We're committed to providing you with the best shopping experience possible, and we hope our FAQ page will help
      make your shopping experience with us even better.</p>
  </div>
  <div class="faq-grid">
    <figure class="snip1543" :class="hoverClass" @mousehover="addClass" @mouseleave="removeClass">
      <img src="/src/assets/images/faq/pexels-pixabay-325876.jpg" alt="Sizing & Fit" />
      <figcaption>
        <h3>Sizing & Fit</h3>
        <p> Find your perfect fit with our comprehensive sizing guide and helpful tips on how to measure.</p>
      </figcaption>
      <a href="#"></a>
    </figure>
    <figure class="snip1543" :class="hoverClass" @mousehover="addClass" @mouseleave="removeClass">
      <img src="/src/assets/images/faq/pexels-andrea-piacquadio-3755706.jpg" alt="Product Availability" />
      <figcaption>
        <h3>Product Availability</h3>
        <p>Stay up-to-date on product availability and be the first to know when your favorite items are back in stock.
        </p>
      </figcaption>
      <a href="#"></a>
    </figure>
    <figure class="snip1543" :class="hoverClass" @mousehover="addClass" @mouseleave="removeClass">
      <img src="/src/assets/images/faq/pexels-pixabay-262039.jpg" alt="Newsroom" />
      <figcaption>
        <h3>Newsroom</h3>
        <p>Get the latest news and updates about our products, collections, events, and collaborations.</p>
      </figcaption>
      <a href="#"></a>
    </figure>
    <figure class="snip1543" :class="hoverClass" @mousehover="addClass" @mouseleave="removeClass">
      <img src="/src/assets/images/faq/pexels-rene-asmussen-3167257.jpg" alt="Payment" />
      <figcaption>
        <h3>Payment</h3>
        <p>We accept all major credit cards and offer a secure checkout process to ensure your personal and financial
          information is protected.</p>
      </figcaption>
      <a href="#"></a>
    </figure>
    <figure class="snip1543" :class="hoverClass" @mousehover="addClass" @mouseleave="removeClass">
      <img src="/src/assets/images/faq/pexels-terje-sollie-313702.jpg" alt="Account" />
      <figcaption>
        <h3>Account</h3>
        <p>Create an account to enjoy exclusive perks and benefits, such as faster checkout, order tracking, and
          personalized recommendations.</p>
      </figcaption>
      <a href="#"></a>
    </figure>
    <figure class="snip1543" :class="hoverClass" @mousehover="addClass" @mouseleave="removeClass">
      <img src="/src/assets/images/faq/pexels-катерина-кушниренко-5851808.jpg" alt="Contact" />
      <figcaption>
        <h3>Contact</h3>
        <p>Get in touch with our customer service team for any further questions or concerns you may have.</p>
      </figcaption>
      <a href="#"></a>
    </figure>
  </div>
</template>

<style scoped>
.low-opacity-bg-image {
  --bg-image: url(/src/assets/images/faq/pexels-cottonbro-studio-10669638.jpg);
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
  background-position: center;
}

.faq-grid {
  display: grid;
  gap: 1rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  inline-size: min(100% - 2rem, 70rem);
  margin-inline: auto;
}

.snip1543 {
  background-color: #fff;
  color: #ffffff;
  max-width: 400px;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.snip1543 *,
.snip1543 *:before,
.snip1543 *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.snip1543 img {
  backface-visibility: hidden;
  max-width: 100%;
  height: 100%;
  width: auto;
  vertical-align: top;
}

.snip1543:before,
.snip1543:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  background-color: var(--primary-brand-color);
  opacity: 0.5;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.snip1543:before {
  -webkit-transform: skew(30deg) translateX(-80%);
  transform: skew(30deg) translateX(-80%);
}

.snip1543:after {
  -webkit-transform: skew(-30deg) translateX(-70%);
  transform: skew(-30deg) translateX(-70%);
}

.snip1543 figcaption {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  bottom: 0;
  padding: 25px 10% 25px 25px;
}

.snip1543 figcaption:before,
.snip1543 figcaption:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--primary-brand-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  content: '';
  opacity: 0.5;
  z-index: -1;
}

.snip1543 figcaption:before {
  -webkit-transform: skew(30deg) translateX(-100%);
  transform: skew(30deg) translateX(-100%);
}

.snip1543 figcaption:after {
  -webkit-transform: skew(-30deg) translateX(-90%);
  transform: skew(-30deg) translateX(-90%);
}

.snip1543 h3,
.snip1543 p {
  margin: 0;
  opacity: 0;
  letter-spacing: 1px;
}

.snip1543 h3 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
  padding-bottom: 1rem;
}

.snip1543 p {
  font-size: 1rem;
}

.snip1543 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.snip1543:hover h3,
.snip1543.hover h3,
.snip1543:hover p,
.snip1543.hover p {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 0.9;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.snip1543:hover:before,
.snip1543.hover:before {
  -webkit-transform: skew(30deg) translateX(-20%);
  transform: skew(30deg) translateX(-20%);
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

.snip1543:hover:after,
.snip1543.hover:after {
  -webkit-transform: skew(-30deg) translateX(-10%);
  transform: skew(-30deg) translateX(-10%);
}

.snip1543:hover figcaption:before,
.snip1543.hover figcaption:before {
  -webkit-transform: skew(30deg) translateX(-40%);
  transform: skew(30deg) translateX(-40%);
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

.snip1543:hover figcaption:after,
.snip1543.hover figcaption:after {
  -webkit-transform: skew(-30deg) translateX(-30%);
  transform: skew(-30deg) translateX(-30%);
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
</style>