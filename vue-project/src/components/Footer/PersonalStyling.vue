<script setup lang="ts">
</script>

<template>
  <div class="low-opacity-bg-image">
    <p class="hero-heading">Personal Styling</p>
  </div>
  <div class="hero-section">
    <p class="hero-copy">At Scarlatta Fortuna, we believe that personal style is the ultimate expression of individuality.
      That's why we offer a personalized styling service to help you discover and cultivate your unique sense of style.
      Our experienced stylists will work with you to understand your preferences and create a customized wardrobe that
      reflects your personality and lifestyle. From selecting the perfect haute couture pieces to incorporating the latest
      fashion trends, our stylists will help you curate a wardrobe that's truly one-of-a-kind. Whether you're looking for
      a complete wardrobe overhaul or just need a few key pieces to update your look, our personal styling service is the
      perfect way to elevate your fashion game. Contact us today to schedule a consultation and start your fashion
      journey.</p>
  </div>
  <h1>Hover on the images below to learn more about our personalized styling service.</h1>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4620618.jpg);"></div>
        <!-- <h2>Image 226</h2> -->
        <div class="slide">
          <p>Autem possimus perspiciatis, eaque quos repudiandae modi labore sed repellat dolorum magnam praesentium
            expedita esse tempore saepe nulla.</p>
        </div>
      </div>
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4622226.jpg);"></div>
        <!-- <h2>Image 143</h2> -->
        <div class="slide">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4621560.jpg);"></div>
        <!-- <h2>Image 242</h2> -->
        <div class="slide">
          <p>Doloremque quisquam molestias, est laudantium vero aliquid dolorum inventore atque sint perferendis qui dolor
            voluptas consequuntur non.</p>
        </div>
      </div>
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4621921.jpg);"></div>
        <!-- <h2>Image 59</h2> -->
        <div class="slide">
          <p>Facere illo pariatur necessitatibus fugit quo impedit, quae, corporis placeat recusandae dolor ipsa nobis!
          </p>
        </div>
      </div>
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4622223.jpg);"></div>
        <!-- <h2>Image 45</h2> -->
        <div class="slide">
          <p>Quam molestiae ipsa sapiente mollitia, nobis.</p>
        </div>
      </div>
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4622397.jpg);"></div>
        <!-- <h2>Image 61</h2> -->
        <div class="slide">
          <p>Autem possimus perspiciatis, eaque quos repudiandae modi labore sed repellat dolorum magnam praesentium
            expedita esse tempore saepe nulla.</p>
        </div>
      </div>
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4622215.jpg);"></div>
        <!-- <h2>Image 130</h2> -->
        <div class="slide">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4622213.jpg);"></div>
        <!-- <h2>Image 252</h2> -->
        <div class="slide">
          <p>Facere illo pariatur necessitatibus fugit quo impedit, quae, corporis placeat recusandae dolor ipsa nobis!
          </p>
        </div>
      </div>
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4621558.jpg);"></div>
        <!-- <h2>Image 11</h2> -->
        <div class="slide">
          <p>Quam molestiae ipsa sapiente mollitia, nobis.</p>
        </div>
      </div>
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4622209.jpg);"></div>
        <!-- <h2>Image 218</h2> -->
        <div class="slide">
          <p>Autem possimus perspiciatis, eaque quos repudiandae modi labore sed repellat dolorum magnam praesentium
            expedita esse tempore saepe nulla.</p>
        </div>
      </div>
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4621557.jpg);"></div>
        <!-- <h2>Image 287</h2> -->
        <div class="slide">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="photo-container"
          style="background-image:url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4622224.jpg);"></div>
        <!-- <h2>Image 210</h2> -->
        <div class="slide">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.low-opacity-bg-image {
  --bg-image: url(/src/assets/images/personalStyling/pexels-cottonbro-studio-4621565.jpg);
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
  background-position: center;
  background-position: center 90%;
}

.hero-heading {
  margin-top: 25rem;
}

.col {
  overflow: hidden;
  position: relative;
}

.slide {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* Visibility delay gives the previously hovered element time to slide out before disappearing. Remove the `visibility` transition to slide in current element without sliding out previous element */
  transition: all 0.275s ease-in-out, visibility 0s 0.275s;
  visibility: hidden;
  will-change: transform;
  transform: translateY(100%);
}

.row:hover~.row .slide {
  transform: translateY(-100%);
}

.row:hover .slide {
  transform: translateX(100%);
}

.row:hover .col:hover~.col .slide {
  transform: translateX(-100%);
}

.row:hover .col:hover .slide {
  transform: none;
  visibility: visible;
  transition-delay: 0s;
}

h1 {
  font-size: 2.25rem;
  font-weight: 400;
  margin: 1.5em 0.5rem 1em;
  text-align: center;
}

.container {
  margin: 0 auto;
  padding: 2rem;
  max-width: 1200px;
}

.row {
  display: flex;
}

.col {
  color: #fff;
  flex: 1 1 auto;
  min-height: 260px;
  position: relative;
}

.col h2 {
  font-weight: 300;
  font-size: 1.33333rem;
  line-height: 1.25;
  margin: 0;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 0;
}

.col:nth-child(2) {
  min-width: 20%;
}

.col:nth-child(4) {
  min-width: 33%;
}

.col:nth-child(3)+.col:nth-child(3) {
  min-width: 50%;
}

.photo-container {
  background: #0f0523 50% 50% / cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 1s;
  transform-origin: bottom right;
}

.photo-container::before {
  background: linear-gradient(transparent, rgba(67, 17, 51, 0.5), #000320);
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.col:hover .photo-container {
  transform: scale(1.25);
}

.slide {
  background: rgba(25, 1, 21, 0.8);
  padding: 0 1.5rem;
}
</style>