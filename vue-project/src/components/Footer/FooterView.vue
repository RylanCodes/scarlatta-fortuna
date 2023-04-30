<script setup lang="ts">
</script>

<template>
  <footer class="footer-wrap">
    <div class="company">
      <h3><router-link to="/stores">Stores</router-link></h3>
      <h3><router-link to="/about-us">About Us</router-link></h3>
      <h3><router-link to="/our-team">Our Team</router-link></h3>
      <h3><router-link to="/newsletter">Newsletter</router-link></h3>
      <h3><router-link to="/styling">Personal Styling</router-link></h3>
    </div>
    <div class="customer-care">
      <h3><router-link to="/faq">FAQ</router-link></h3>
      <h3><router-link to="/careers">Careers</router-link></h3>
      <h3><router-link to="/contact-us">Contact Us</router-link></h3>
      <h3><router-link to="/orders-shipping">Orders & Shipping</router-link></h3>
      <h3><router-link to="/returns-exchanges">Returns & Exchanges</router-link></h3>
    </div>
    <div class="social">
      <p>Join our newsletter & and keep buying</p>
      <div class="join">
        <input class="input" type="email" placeholder="Email address" required />
        <button type="submit" class="btn join fun">JOIN</button>
      </div>
      <div class="social-media">
        <p>Follow our journey</p>
        <div class="social-media logos">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-snapchat"></i>
          <i class="fa-brands fa-tiktok"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-solid fa-share-nodes">
          </i>
        </div>
      </div>
    </div>
  </footer>
  <div class="legal-footer">
    <div class="line-divider"></div>
    <div class="legal-text">
      <p>Website Feedback | Terms of Use | Accessibility | Privacy Policy | ©2022 Scarlatta Fortuna. All Rights
        Reserved.</p>
    </div>
  </div>
</template>

<style scoped>
footer,
.legal-footer {
  background-color: var(--footer-color);
}

footer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 1rem;
  padding-inline: 1rem;
}

a,
p {
  color: var(--dark-color);
  line-height: 2rem;
  padding-block: 0.1rem;
}

i {
  padding-right: 0.5rem;
}

.join {
  display: flex;
  column-gap: 0.4rem;
}

.social p,
.social-media p {
  font-weight: bold;
}

.line-divider {
  background-color: var(--accent-color);
  width: 75%;
  height: 1px;
  margin: 0 auto;
}

.legal-footer {
  font-size: 0.7rem;
  padding-top: 1rem;
  text-align: center;
}
</style>