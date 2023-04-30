<script setup lang="ts">
</script>

<template>
  <div class="low-opacity-bg-image">
    <p class="hero-heading">Join our team</p>
  </div>
  <div class="hero-section">
    <p class="hero-copy">At Scarlatta Fortuna, we are passionate about creating exquisite haute couture designs that are
      both timeless and innovative. Our team is made up of talented and dedicated designers, seamstresses, and artisans who are
      committed to excellence and craftsmanship. We are always on the lookout for individuals who share our love for
      fashion and creativity, and who are eager to join our team and contribute to our mission. If you have a passion for
      haute couture and are looking for a challenging and rewarding career in the fashion industry, explore our current
      job openings and apply today.</p>
  </div>
  <div class="grid-wrap">
    <div class="card-tile">
      <img src='/src/assets/images/careers/pexels-cottonbro-studio-5971239.jpg' />
      <div class="text">
        <h1>Senior Fashion Designer</h1>
        <h2 class="animate-text">Minimum of 10 years of experience</h2>
        <p class="animate-text">The successful candidate will be responsible for leading our design team and creating
          innovative and unique designs that embody our brand's vision and aesthetic. They will collaborate with our team
          of artisans and craftsmen to bring their designs to life, ensuring that every piece is of the highest quality and craftsmanship.
        </p>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="card-tile">
      <img src='/src/assets/images/careers/pexels-cottonbro-studio-6538581.jpg' />
      <div class="text">
        <h1>Head Seamstress</h1>
        <h2 class="animate-text">Minimum of 7 years of experience</h2>
        <p class="animate-text">The successful candidate will be responsible for managing our sewing team and ensuring
          that our garments are made to
          the highest standards of craftsmanship and quality. They will work closely with our designers and artisans to
          bring their designs to life, and will manage a team of skilled seamstresses to ensure that our production runs
          smoothly and efficiently.</p>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="card-tile">
      <img src='/src/assets/images/careers/pexels-cottonbro-studio-6567813.jpg' />
      <div class="text">
        <h1>Marketing Manager</h1>
        <h2 class="animate-text">Minimum of 5 years of experience</h2>
        <p class="animate-text">The successful candidate will be responsible for leading our marketing efforts and
          developing and
          executing strategies that build brand awareness and drive sales. They will work closely with our
          design team to ensure that our marketing campaigns are aligned with our brand's vision and aesthetic, and will
          manage a team of marketing professionals to ensure that our campaigns are executed to the highest standards.</p>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="card-tile">
      <img src='/src/assets/images/careers/pexels-cottonbro-studio-8453954.jpg' />
      <div class="text">
        <h1>Master Tailor</h1>
        <h2 class="animate-text">Minimum of 10 years of experience</h2>
        <p class="animate-text">The successful candidate will be responsible for creating bespoke garments that are of the
          highest quality and craftsmanship. They will work closely with our designers to understand their vision and
          bring their designs to life, using their expertise to create tailored pieces that fit our clients like
          a glove. The ideal candidate will have exceptional attention to detail and a passion for creating one-of-a-kind
          pieces that are truly unforgettable.</p>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.low-opacity-bg-image {
  --bg-image: url(/src/assets/images/careers/pexels-cottonbro-studio-9154694.jpg);
  --bg-image: url(/src/assets/images/careers/pexels-cottonbro-studio-9154880.jpg);
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

.hero-heading {
  color: var(--dark-color);
  margin-right: 23.5rem;
  line-height: 0.8;
}

.grid-wrap {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  inline-size: min(100% - 4rem, 90rem);
  margin-inline: auto;
  padding-bottom: 2rem;
}

.text {
  padding: 1rem;
}

.card-tile {
  height: 380px;
  display: inline-block;
  background-size: cover;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease-out;
  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44);
  overflow: hidden;
}

.card-tile img {
  position: absolute;
  transition: all 0.4s ease-out;
}

.card-tile .text-section {
  position: absolute;
  height: calc(100% - 60px);
}

.card-tile h1 {
  font-weight: 600;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

.card-tile h2 {
  font-weight: 400;
  margin: 20px 0 0 0;
  font-style: italic;
  transform: translateX(200px);
}

.card-tile p {
  font-weight: 300;
  margin: 20px 0 0 0;
  line-height: 25px;
  transform: translateX(-200px);
  transition-delay: 0.2s;
}

.animate-text {
  opacity: 0;
  transition: all 0.6s ease-in-out;
}

.card-tile:hover {
  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);
  transform: scale(1.05);
}

.card-tile:hover img {
  opacity: 0.2;
}

.card-tile:hover .animate-text {
  transform: translateX(0);
  opacity: 1;
}

.dots {
  position: absolute;
  bottom: 20px;
  right: 30px;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.dots span {
  width: 5px;
  height: 5px;
  background-color: black;
  border-radius: 50%;
  display: block;
  opacity: 0;
  transition: transform 0.4s ease-out, opacity 0.5s ease;
  transform: translateY(30px);
}

.card-tile:hover span {
  opacity: 1;
  transform: translateY(0px);
}

.dots span:nth-child(1) {
  transition-delay: 0.05s;
}

.dots span:nth-child(2) {
  transition-delay: 0.1s;
}

.dots span:nth-child(3) {
  transition-delay: 0.15s;
}
</style>