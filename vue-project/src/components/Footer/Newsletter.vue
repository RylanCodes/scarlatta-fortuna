<script setup lang="ts">
</script>

<template>
  <div class="row">
    <div class="news-1 card">
      <div class="wrapper">
        <div class="date">
          <span class="day">5</span>
          <span class="month">JAN</span>
          <span class="year">2023</span>
        </div>
        <div class="data">
          <div class="content">
            <span class="author">Emma Davies</span>
            <h1 class="title"><a href="#">Enter the Matrix</a></h1>
            <p class="text">Inspired by the iconic black and white aesthetic, each piece –from a sleek leather jackets to
              a tailored trouser– is designed to make a statement and exude intrigue,
              confidence and sophistication.</p>
            <label for="show-menu" class="menu-button"><span></span></label>
          </div>
          <input type="checkbox" id="show-menu" />
          <ul class="menu-content">
            <li>
              <a href="#" class="fa fa-bookmark-o"></a>
            </li>
            <li><a href="#" class="fa fa-heart-o"><span>47</span></a></li>
            <li><a href="#" class="fa fa-comment-o"><span>8</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="news-2 card">
      <div class="wrapper">
        <div class="header">
          <div class="date">
            <span class="day">19</span>
            <span class="month">JAN</span>
            <span class="year">2023</span>
          </div>
          <ul class="menu-content">
            <li>
              <a href="#" class="fa fa-bookmark-o"></a>
            </li>
            <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
            <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
          </ul>
        </div>
        <div class="data">
          <div class="content">
            <span class="author">Jack Thompson</span>
            <h1 class="title"><a href="#">Inspired by Nature</a></h1>
            <p class="text">Inspired by the natural world, featuring delicate floral patterns, earthy tones, and flowing
              silhouettes. Each piece is designed to capture the beauty and simplicity
              of nature while also embracing the elegance of haute couture.</p>
            <a href="#" class="button">Read more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="news-3 card">
      <div class="wrapper">
        <div class="date">
          <span class="day">2</span>
          <span class="month">FEV</span>
          <span class="year">2023</span>
        </div>
        <div class="data">
          <div class="content">
            <span class="author">William Carter</span>
            <h1 class="title"><a href="#">The Power of Accessories</a></h1>
            <p class="text">The right accessories can take any outfit from ordinary to extraordinary. From statement
              jewelry to elegant handbags, each piece is designed to complement our haute couture designs and elevate your
              style.</p>
            <label for="show-menu" class="menu-button"><span></span></label>
          </div>
          <input type="checkbox" id="show-menu" />
          <ul class="menu-content">
            <li>
              <a href="#" class="fa fa-bookmark-o"></a>
            </li>
            <li><a href="#" class="fa fa-heart-o"><span>47</span></a></li>
            <li><a href="#" class="fa fa-comment-o"><span>8</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="news-4 card">
      <div class="wrapper">
        <div class="header">
          <div class="date">
            <span class="day">16</span>
            <span class="month">FEV</span>
            <span class="year">2023</span>
          </div>
          <ul class="menu-content">
            <li>
              <a href="#" class="fa fa-bookmark-o"></a>
            </li>
            <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
            <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
          </ul>
        </div>
        <div class="data">
          <div class="content">
            <span class="author">Olivia Patel</span>
            <h1 class="title"><a href="#">Sustainable Fashion</a></h1>
            <p class="text">We believe that fashion should not only look good but also do good. From recycled
              fabrics to low-impact dyes, each of our pieces is crafted with the environment in mind. Learn more about our
              sustainable fashion practices.</p>
            <a href="#" class="button">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: unset;
}

h1 {
  font-weight: 300;
  font-size: 1.75rem;
  margin-bottom: 10px;
}

.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.card {
  padding: 1rem;
}

.card .menu-content {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.card .menu-content::before,
.card .menu-content::after {
  content: '';
  display: table;
}

.card .menu-content::after {
  clear: both;
}

.card .menu-content li {
  display: inline-block;
}

.card .menu-content a {
  color: #fff;
}

.card .menu-content span {
  position: absolute;
  left: 50%;
  top: 0;
  font-size: 10px;
  font-weight: 700;
  transform: translate(-50%, 0);
}

.card .wrapper {
  background-color: #fff;
  min-height: 700px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
}

.card .wrapper:hover .data {
  transform: translateY(0);
}

.card .data {
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(calc(70px + 1em));
  transition: transform 0.3s;
}

.card .data .content {
  padding: 1em;
  position: relative;
  z-index: 1;
}

.card .author {
  font-size: 12px;
}

.card .title {
  margin-top: 10px;
}

.card .text {
  height: 70px;
  margin: 0;
}

.card input[type='checkbox'] {
  display: none;
}

.card input[type='checkbox']:checked+.menu-content {
  transform: translateY(-60px);
}

.news-1 .wrapper {
  background: url(/src/assets/images/newsletter/pexels-archifashiondesign-9573706.jpg);
  background-size: cover;
  background-position: center 40%;
}

.news-3 .wrapper {
  background: url(/src/assets/images/newsletter/pexels-cottonbro-studio-9953933.jpg);
  background-size: cover;
  background-position: 30% center;
}

.news-1 .date,
.news-3 .date {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary-brand-color);
  color: #fff;
  padding: 0.8em;
}

.news-1 .date span,
.news-3 .date span {
  display: block;
  text-align: center;
}

.news-1 .date .day,
.news-3 .date .day {
  font-weight: 700;
  font-size: 24px;
  text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.18);
}

.news-1 .date .month,
.news-3 .date .month {
  text-transform: uppercase;
}

.news-1 .date .month,
.news-1 .date .year,
.news-3 .date .month,
.news-3 .date .year {
  font-size: 12px;
}

.news-1 .content,
.news-3 .content {
  background-color: #fff;
  box-shadow: 0 5px 30px 10px rgba(0, 0, 0, 0.3);
}

.news-1 .title a,
.news-3 .title a {
  color: #808080;
}

.news-1 .menu-button,
.news-3 .menu-button {
  position: absolute;
  z-index: 999;
  top: 16px;
  right: 16px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}

.news-1 .menu-button span,
.news-3 .menu-button span {
  width: 5px;
  height: 5px;
  background-color: #808080;
  color: #808080;
  position: relative;
  display: inline-block;
  border-radius: 50%;
}

.news-1 .menu-button span::after,
.news-1 .menu-button span::before,
.news-3 .menu-button span::after,
.news-3 .menu-button span::before {
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  background-color: #808080;
  position: absolute;
  border-radius: 50%;
}

.news-1 .menu-button span::before,
.news-3 .menu-button span::before {
  left: -10px;
}

.news-1 .menu-button span::after,
.news-3 .menu-button span::after {
  right: -10px;
}

.news-1 .menu-content,
.news-3 .menu-content {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  transition: transform 0.3s;
  transform: translateY(0);
}

.news-1 .menu-content li,
.news-3 .menu-content li {
  width: 33.333333%;
  float: left;
  background-color: var(--primary-brand-color);
  height: 60px;
  position: relative;
}

.news-1 .menu-content a,
.news-3 .menu-content a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
}

.news-1 .menu-content span,
.news-3 .menu-content span {
  top: -10px;
}

.news-2 .wrapper {
  background: url(/src/assets/images/newsletter/pexels-cottonbro-studio-10679206.jpg) center / cover no-repeat;
}

.news-4 .wrapper {
  background: url(/src/assets/images/newsletter/pexels-cottonbro-studio-10545226.jpg) center / cover no-repeat;
}

.news-2 .wrapper:hover .menu-content span,
.news-4 .wrapper:hover .menu-content span {
  transform: translate(-50%, -10px);
  opacity: 1;
}

.news-2 .header,
.news-4 .header {
  color: #fff;
  padding: 1em;
}

.news-2 .header::before,
.news-2 .header::after,
.news-4 .header::before,
.news-4 .header::after {
  content: '';
  display: table;
}

.news-2 .header::after,
.news-4 .header::after {
  clear: both;
}

.news-2 .header .date,
.news-4 .header .date {
  float: left;
  font-size: 12px;
}

.news-2 .header .date span,
.news-4 .header .date span {
  padding-right: 0.25rem;
}

.news-2 .menu-content,
.news-4 .menu-content {
  float: right;
}

.news-2 .menu-content li,
.news-4 .menu-content li {
  margin: 0 5px;
  position: relative;
}

.news-2 .menu-content span,
.news-4 .menu-content span {
  transition: all 0.3s;
  opacity: 0;
}

.news-2 .data,
.news-4 .data {
  color: #fff;
  transform: translateY(calc(70px + 4em));
}

.news-2 .title a,
.news-4 .title a {
  color: #fff;
}

.news-2 .button,
.news-4 .button {
  display: block;
  width: 100px;
  margin: 2em auto 1em;
  text-align: center;
  font-size: 12px;
  color: #fff;
  line-height: 1;
  position: relative;
  font-weight: 700;
}

.news-2 .button::after,
.news-4 .button::after {
  content: '\2192';
  opacity: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  transition: all 0.3s;
}

.news-2 .button:hover::after,
.news-4 .button:hover::after {
  transform: translate(5px, -50%);
  opacity: 1;
}
</style>