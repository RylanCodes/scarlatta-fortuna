<script setup lang="ts">
</script>

<template>
  <div class="low-opacity-bg-image">
    <p class="hero-heading">Our Team</p>
  </div>
  <div class="hero-section flow">
    <p class="hero-copy">Welcome to our world of luxury fashion! We are a team of highly skilled and creative
      professionals who are
      passionate about delivering the finest clothing and accessories to our elite clientele. With years of experience in
      design, production, and retail, we are committed to providing unparalleled service and quality. From exquisite
      fabrics to intricate details, we pay attention to every detail to ensure that our products exceed your expectations.
      Meet our team of experts who make you look and feel your best, and discover their individual areas of specialization, from haute couture to bespoke
      tailoring.</p>
    <div class="team">
      <ul class="auto-grid" role="list">
        <li>
          <a href="#" target="_blank" class="profile">
            <h2 class="profile__name">Benjamin Foster</h2>
            <p>Founder & Creative Director</p>
            <img alt="Profile shot for Benjamin Foster"
              src="/src/assets/images/teamMembers/juri-gianfrancesco-9EZadYaMzk4-unsplash.jpg" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" class="profile">
            <h2 class="profile__name">Jane Parker</h2>
            <p>Head Designer</p>
            <img alt="Profile shot for Jane Parker"
              src="/src/assets/images/teamMembers/lance-reis-WqjS9TGf0_U-unsplash.jpg" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" class="profile">
            <h2 class="profile__name"> Olivia Ward</h2>
            <p>Master Tailor & Atelier Manager</p>
            <img alt="Profile shot for  Olivia Ward"
              src="/src/assets/images/teamMembers/prince-akachi-J1OScm_uHUQ-unsplash.jpg" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" class="profile">
            <h2 class="profile__name">Charlotte Hayes</h2>
            <p>Fabric Sourcing Manager</p>
            <img alt="Profile shot for Charlotte Hayes"
              src="/src/assets/images/teamMembers/luobulinka-FO4mQZi1c0M-unsplash.jpg" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" class="profile">
            <h2 class="profile__name">Alexander Grant</h2>
            <p>Sales Director</p>
            <img alt="Profile shot for Alexander Grant"
              src="/src/assets/images/teamMembers/albert-dera-ILip77SbmOE-unsplash.jpg" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" class="profile">
            <h2 class="profile__name">Samantha Cruz</h2>
            <p>Marketing Director</p>
            <img alt="Profile shot for Samantha Cruz"
              src="/src/assets/images/teamMembers/lance-reis-b0Kuy3IqiaU-unsplash.jpg" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.low-opacity-bg-image {
  /* --bg-image: url(/src/assets/images/teamMembers/pexels-terje-sollie-298864.jpg); */
  --bg-image: url(/src/assets/images/teamMembers/pexels-archifashiondesign-9573699.jpg);
  --bg-image-opacity: 1;

  display: grid;
  place-content: center;
  text-align: center;
  min-height: 600px;
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
  background-position: center 15%;
}

.hero-heading {
  color: var(--dark-color);
  margin-bottom: 22rem;
}

.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 0;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  aspect-ratio: 1/1;
  position: relative;
  padding: 1.5rem;
  color: #ffffff;
  backface-visibility: hidden;
  text-decoration: none;
  overflow: hidden;
}

.profile::before,
.profile::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  /*inset: 0;*/
  top: 0;
  left: 0;
}

.profile::before {
  background: linear-gradient(to top,
      hsl(0 0% 0% / 0.79) 0%,
      hsl(0 0% 0% / 0.787) 7.8%,
      hsl(0 0% 0% / 0.779) 14.4%,
      hsl(0 0% 0% / 0.765) 20.2%,
      hsl(0 0% 0% / 0.744) 25.3%,
      hsl(0 0% 0% / 0.717) 29.9%,
      hsl(0 0% 0% / 0.683) 34.3%,
      hsl(0 0% 0% / 0.641) 38.7%,
      hsl(0 0% 0% / 0.592) 43.3%,
      hsl(0 0% 0% / 0.534) 48.4%,
      hsl(0 0% 0% / 0.468) 54.1%,
      hsl(0 0% 0% / 0.393) 60.6%,
      hsl(0 0% 0% / 0.31) 68.3%,
      hsl(0 0% 0% / 0.216) 77.3%,
      hsl(0 0% 0% / 0.113) 87.7%,
      hsl(0 0% 0% / 0) 100%);
  transition: 300ms opacity linear;
}

.profile::after {
  background: linear-gradient(45deg,
      hsl(5 97% 63% / 0.7) 0,
      hsl(5 97% 63% / 0) 100%);
  opacity: 0;
  transition: 300ms opacity linear;
}

.profile>* {
  z-index: 1;
}

.profile img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  z-index: -1;
  object-fit: cover;
  filter: grayscale(1);
  transition: filter 200ms ease, transform 250ms linear;
}

.profile h2,
.profile p {
  transform: translateY(2ex);
}

.profile h2 {
  font-size: 1.7rem;
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: 0.03ch;
  transition: 300ms transform ease;
}

.profile p {
  font-size: 1.2rem;
  font-weight: 500;
}

.profile p {
  opacity: 0;
  transition: 300ms opacity linear, 300ms transform ease-in-out;
}

.profile:focus {
  outline: 0.5rem solid white;
  outline-offset: -0.5rem;
}

.profile:hover :is(h2, p),
.profile:focus :is(h2, p) {
  transform: none;
}

.profile:hover::after,
.profile:focus::after,
.profile:hover::before,
.profile:focus::before {
  opacity: 0.7;
}

.profile:hover p,
.profile:focus p {
  opacity: 1;
  transition-delay: 200ms;
}

.profile:hover img,
.profile:focus img {
  filter: grayscale(0);
  transform: scale(1.05) rotate(1deg);
}
</style>