<script setup lang="ts">
</script>

<template>
  <article>
    <figure>
      <img src='/src/assets/images/teamMembers/juri-gianfrancesco-9EZadYaMzk4-unsplash.jpg' />
    </figure>
    <section>
      <div>
        <h1><span>WE ARE</span><br />SCARLATTA FORTUNA</h1>
        <p>&ldquo;Our fashion house is dedicated to creating the most exquisite and luxurious haute couture designs that
          are both timeless and
          innovative.&rdquo;<br />&mdash;Benjamin Foster, Founder</p>
      </div>
    </section>

    <figure>
      <img src='/src/assets/images/aboutUs/pexels-cottonbro-studio-10679144.jpg' />
    </figure>
    <section>
      <div>
        <h2>LUXURY,<br />
          ELEGANCE &<br />
          EXPERTISE</h2>
        <p>From the finest materials to the most intricate details, every piece is crafted with unparalleled
          skill and expertise.</p>
      </div>
    </section>

    <figure>
      <img src='/src/assets/images/aboutUs/pexels-cottonbro-studio-10547283.jpg' />
    </figure>
    <section>
      <div>
        <!-- <h2><a href='https://escss.blogspot.com'>craftsmanship</a></h2> -->
        <h2>CREATIVITY<br />
          & PASSION</h2>
        <p>Our passionate team is made up of some of the most talented designers, experienced seamstresses, and creative
          artisans in the fashion industry.</p>
      </div>
    </section>

    <figure>
      <img src='/src/assets/images/aboutUs/pexels-cottonbro-studio-10485412.jpg' />
    </figure>
    <section>
      <div>
        <h2>COMMITMENT & EXCELLENCE</h2>
        <p>Each member of our team is driven by a passion for creativity and a commitment to excellence, and we all share
          a love for the art of haute couture.</p>
      </div>
    </section>

    <figure>
      <img src='/src/assets/images/aboutUs/pexels-cottonbro-studio-4973006.jpg' />
    </figure>
    <section>
      <div>
        <h2>UNMATCHED Quality & Craftsmanship<a href='https://codepen.io/eduardoboucas/full/qdaOWv/'></a></h2>
        <p>From our stunning gowns and dresses to our chic separates and accessories, every piece is a work of art that
          will make you feel beautiful, stylish, confident, and empowered.</p>
      </div>
    </section>

    <figure>
      <img src='/src/assets/images/aboutUs/pexels-jackline-addis-ababa-10370351.jpg' />
    </figure>
    <section>
      <div>
        <h2>UNIQUE<br />Tailored<br />Pieces</h2>
        <p>We believe that haute couture is not just about creating beautiful and one-of-a-kind pieces, but also about
          creating a
          connection between the designer, the wearer, and the art of fashion. </p>
      </div>
    </section>

    <figure>
      <img src='/src/assets/images/aboutUs/pexels-archifashiondesign-9573696.jpg' />
    </figure>
    <section>
      <div>
        <h2>UNFORGETTABLE<br />
          <router-link to="/collections">Explore our collections</router-link>
          <!-- <a href='https://escss.blogspot.com/2017/08/scroll-half-by-half-pure-css.html'></a> -->
        </h2>
        <p>We create unique looks that are truly unforgettable and we bring fashion dreams to life with the finest haute
          couture designs that the world has to offer.</p>
      </div>
    </section>
  </article>
</template>

<style scoped>
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  border: 0 none;
  position: relative;
}

@media screen and (min-width: 700px) {
  body>article {
    display: flex;
    flex-wrap: wrap;
  }

  figure {
    background: #eee;
    width: calc(50% + 1px);
    height: 100vh;
    margin: 0 auto 10vh 0;
    position: sticky;
    top: 0;
    overflow: hidden;
    box-shadow: 4px -4px 8px rgba(0, 0, 0, .4);
  }

  /* figure::after {
    content: '';
    position: absolute;
    top: 5vmin;
    right: 5vmin;
    bottom: 5vmin;
    left: 45%;
    border: 2px dashed #fff;
    outline: 1px solid #fff;
    outline-offset: -5vmin;
    backdrop-filter: grayscale(1);
    pointer-events: none;
  } */

  figure:nth-of-type(2n)::after {
    right: 45%;
    left: 5vmin;
    background-color: red;
  }

  section {
    background: #e5e5e5;
    background: var(--primary-brand-color);
    background: var(--accent-color);
    background: var(--light-color);
    width: calc(50% + 1px);
    height: 100vh;
    margin: 0 0 10vh auto;
    position: sticky;
    top: 0;
    padding: 5vmin;
    box-shadow: -4px -4px 8px rgba(0, 0, 0, .4);
  }

  figure:nth-of-type(1),
  section:nth-of-type(1) {
    width: 50%;
  }

  figure:nth-of-type(2n) {
    margin: 0 0 10vh auto;
    box-shadow: -4px -4px 8px rgba(0, 0, 0, .4);
  }

  section:nth-of-type(2n) {
    margin: 0 auto 10vh 0;
    box-shadow: 4px -4px 8px rgba(0, 0, 0, .4);
  }

  figure:last-of-type,
  section:last-of-type {
    margin-bottom: 0;
  }

  /* little white triangle */
  section::before {
    background: inherit;
    z-index: 1;
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 7vmin;
    height: 7vmin;
    transform: translate(calc(-50% + 1px), -50%) rotate(-45deg);
    clip-path: polygon(-15% -15%, 110% 0%, 0% 110%);
    box-shadow: -4px -2px 8px rgba(0, 0, 0, .4);
    border-radius: 1.5vmin 0 0 0;
  }

  section:nth-of-type(2n)::before {
    left: auto;
    right: 0;
    transform: translate(calc(50% - 1px), -50%) rotate(-45deg) scale(-1);
  }

  /* black rectangle */
  section::after {
    content: '';
    position: absolute;
    top: 5vmin;
    right: 45%;
    bottom: 5vmin;
    left: 5vmin;
    outline: 1px solid #fff;
    outline-offset: -5vmin;
    background-color: rgba(219, 163, 154, 0.6);
    pointer-events: none;
    z-index: -1;
  }

  section:nth-of-type(2n):after {
    right: 5vmin;
    left: 45%;
  }

  figure img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center;
  }

  section>div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 1rem;
  }

  h1,
  h2 {
    margin: 15% 0 auto;
    font-size: calc(5vmin + 3vmax);
    text-align: center;
    font-weight: 700;
    line-height: 1;
    word-spacing: .5rem;
  }

  p {
    text-align: center;
    width: 100%;
    font-family: "Cormorant", serif;
    font-weight: 400;
    font-style: italic;
    font-size: calc(1.5vmin + 1.75vmax);
    margin-bottom: 5%;
  }

  a,
  span {
    color: transparent;
    -webkit-text-stroke: 2px #212121;
    text-decoration: none;
    font-weight: 900;
    letter-spacing: 1px;
  }

  a:hover,
  a:focus {
    -webkit-text-stroke: 1px #999;
    -webkit-text-stroke: 3px var(--accent-color);
    color: var(--dark-color);
  }
}
</style>
<!--
The calc() function is a built-in CSS function that allows you to perform arithmetic operations on CSS properties. 
In this case, it's used to set the font size of an element.
1.5vmin and 1.75vmax are viewport units that represent a percentage of the viewport dimensions. 
vmin is equal to the smaller of 1vw and 1vh, while vmax is equal to the larger of 1vw and 1vh. 
So 1.5vmin represents 1.5% of the smaller dimension of the viewport, and 1.75vmax represents 1.75% of the larger dimension of the viewport.
The calc() function adds these two values together to determine the final font size for the element. 
For example, if the smaller dimension of the viewport is 800px and the larger dimension is 1200px, the font size would be calculated as:
calc(1.5% * 800 + 1.75% * 1200), which simplifies to calc(12 + 21), which equals 33.
So in this example, the font size for the element would be set to 33px.

The pointer-events: none CSS property disables the pointer events (like clicking or hovering) on an element and its child elements, effectively making the element "transparent" to user input.
This is often used to create a visual effect where an element appears on top of other content but does not interfere with the user's interaction with that content. 
For example, in the provided code snippet, the pointer-events: none property is used on the ::after pseudo-elements of the section elements to create an overlay effect without blocking user interaction with the content underneath.

This CSS selector targets every second figure element on the page, starting with the second one (2n means "every even index"). The ::after pseudo-element is then used to create a new element after the figure element.
The right property sets the horizontal position of the ::after element relative to the right edge of its containing element (in this case, the figure element). 
The value 45% means that the element is positioned 45% of the way from the left edge of the containing element to its right edge.
The left property sets the horizontal position of the ::after element relative to the left edge of the containing element. 
The value 5vmin means that the element is positioned 5% of the viewport width to the right of the left edge of the containing element.
So, this line of code positions the ::after pseudo-element of every second figure element such that it appears 45% of the way from the left edge of the figure element to its right edge, and 5% of the viewport width to the right of the left edge of the figure element.

This line of code is targeting every other section element starting from the second one (2n). 
It is selecting the pseudo-element ::before and applying the following styles:
left: auto;: This is resetting the left property to its default value, which is auto. 
Since the right property is also set below, this causes the pseudo-element to be positioned at the right edge of the section element.
right: 0;: This is setting the right edge of the pseudo-element to the right edge of the section element.
transform: translate(calc(50% - 1px), -50%) rotate(-45deg) scale(-1);: This is transforming the pseudo-element.
translate(calc(50% - 1px), -50%): This is translating the pseudo-element 50% to the right and 50% up. 
The calc(50% - 1px) calculation is used to take into account the width of the pseudo-element and center it vertically.
rotate(-45deg): This is rotating the pseudo-element counterclockwise by 45 degrees.
scale(-1): This is flipping the pseudo-element horizontally by reversing its direction. 
This is done because the pseudo-element is positioned at the right edge of the section element, and the arrow needs to point to the left instead of the right.

The backdrop-filter CSS property is used to apply visual effects (such as blurring or color shifting) to an element's backdrop (i.e., the area behind the element). 
The invert() function is used to invert the colors of the backdrop, effectively creating a negative image. 
In this case, backdrop-filter: invert(1) is being used to invert the colors of a dashed rectangle that appears on every other section element 
(as defined by section:nth-of-type(2n):after), creating a white outline on a black background.
-->