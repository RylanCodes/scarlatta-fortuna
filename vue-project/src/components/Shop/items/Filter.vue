<script setup lang="ts">
import { ref, computed } from 'vue'
import { useItems } from "@/stores/itemsStore";
const itemsStore = useItems();

function reset() {
  itemsStore.filterSubcategory = "";
  itemsStore.filterSubCategoryIsUsed == false;
  itemsStore.minPrice = 0;
  itemsStore.maxPrice = 400;
  itemsStore.review = 0;
}

const minPrice = ref(0)
const maxPrice = ref(400)
const priceRange = ref(0)

const minPricePercentage = computed(() => {
  return (minPrice.value / 400) * 100
})

const maxPricePercentage = computed(() => {
  return (maxPrice.value / 400) * 100
})

function updatePrice(e: Event) {
  let input = e.target as HTMLInputElement;
  let value = Number(input.value);
  if (value <= 200) {
    minPrice.value = value;
  } else {
    maxPrice.value = value;
  }
}
</script>

<template>
  <div class="product-filter">
    <svg @click="itemsStore.filterTransition" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="25">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
    <p>FILTER BY:</p>
    <div class="filter-options">
      <button @click="itemsStore.filterOpen = true" class="filtering-btn underline-offset">
        CATEGORIES
      </button>
      <span class="separator"> | </span>
      <button @click="itemsStore.filterOpen = true" class="filtering-btn underline-offset">
        PRICE
      </button>
      <span class="separator"> | </span>
      <button @click="itemsStore.filterOpen = true" class="filtering-btn underline-offset">
        MOST POPULAR
      </button>
    </div>
  </div>
  <Transition name="slide-fade">
    <div class="product-filter-values block" v-show="itemsStore.filterOpen == true">
      <div class="close-btn">
        <button class="close-filtering" @click="itemsStore.filterOpen = false">
          <i class="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
      <div class="filters">
        <div class="filter filter-categories">
          <p class="filter-title">CATEGORIES</p>
          <ul>
            <li>
              <div class="filterCategoriesRadio">
                <div class="filterCheckbox-visual"></div>
                <input type="radio" value="Manteaux" v-model="itemsStore.filterSubcategory" />
                <label for="categories-coats">COATS</label>
              </div>
            </li>
            <li>
              <div class="filterCategoriesRadio">
                <div class="filterCheckbox-visual"></div>
                <input type="radio" value="Robes" v-model="itemsStore.filterSubcategory" />
                <label for="categories-dresses">DRESSES</label>
              </div>
            </li>
            <li>
              <div class="filterCategoriesRadio">
                <div class="filterCheckbox-visual"></div>
                <input type="radio" value="JEANS" v-model="itemsStore.filterSubcategory" />
                <label for="categories-jeans">JEANS</label>
              </div>
            </li>
            <li>
              <div class="filterCategoriesRadio">
                <div class="filterCheckbox-visual"></div>
                <input type="radio" value="Pantalons & Shorts" v-model="itemsStore.filterSubcategory" />
                <label for="categories-pants-shorts">PANTS & SHORTS</label>
              </div>
            </li>
            <li>
              <div class="filterCategoriesRadio">
                <div class="filterCheckbox-visual"></div>
                <input type="radio" value="Ensembles" v-model="itemsStore.filterSubcategory" />
                <label for="categories-sets">SETS</label>
              </div>
            </li>
            <li>
              <div class="filterCategoriesRadio">
                <div class="filterCheckbox-visual"></div>
                <input type="radio" value="Chemises" v-model="itemsStore.filterSubcategory" />
                <label for="categories-shirts">SHIRTS</label>
              </div>
            </li>
            <li>
              <div class="filterCategoriesRadio">
                <div class="filterCheckbox-visual"></div>
                <input type="radio" v-model="itemsStore.filterSubcategory" value="Pyjamas" />
                <label for="categories-sleepwear">SLEEPWEAR</label>
              </div>
            </li>
            <li>
              <div class="filterCategoriesRadio">
                <div class="filterCheckbox-visual"></div>
                <input type="radio" v-model="itemsStore.filterSubcategory" value="Chandails" />
                <label for="categories-sweaters">SWEATERS</label>
              </div>
            </li>
            <li>
              <div class="filterCategoriesRadio">
                <div class="filterCheckbox-visual"></div>
                <input type="radio" value="Maillots de bain" v-model="itemsStore.filterSubcategory" />
                <label for="categories-swimwear">SWIMWEAR</label>
              </div>
            </li>
            <li>
              <div class="filterCategoriesRadio">
                <div class="filterCheckbox-visual"></div>
                <input type="radio" v-model="itemsStore.filterSubcategory" value="Sous-vêtements" />
                <label for="categories-underwear">UNDERWEAR</label>
              </div>
            </li>
          </ul>
        </div>
        <div class="filter filter-price-range">
          <p class="filter-title price">PRICE</p>
          <div class="wrapper">
            <div class="price-input">
              <div class="field">
                <span>Min</span>
                <input type="number" class="input-min" v-model="minPrice" />
              </div>
              <div class="separator">-</div>
              <div class="field">
                <span>Max</span>
                <input type="number" class="input-max" v-model="maxPrice" />
              </div>
            </div>
            <div class="slider">
              <div class="progress"
                v-bind:style="{ left: `${minPricePercentage}%`, right: `${100 - maxPricePercentage}%` }"></div>
            </div>
            <div class="range-input">
              <input type="range" min="0" max="400" v-model="priceRange" step="1" v-on:input="updatePrice" />
            </div>
          </div>
        </div>

        <div class="filter filter-like-stars">
          <p class="filter-title most-popular">MOST POPULAR</p>
          <div class="star-rating">
            <input type="radio" name="stars" id="star-a" value="5" v-model="itemsStore.review" />
            <label for="star-a"></label>
            <input type="radio" name="stars" id="star-b" value="4" v-model="itemsStore.review" />
            <label for="star-b"></label>
            <input type="radio" name="stars" id="star-c" value="3" v-model="itemsStore.review" />
            <label for="star-c"></label>
            <input type="radio" name="stars" id="star-d" value="2" v-model="itemsStore.review" />
            <label for="star-d"></label>
            <input type="radio" name="stars" id="star-e" value="1" v-model="itemsStore.review" />
            <label for="star-e"></label>
          </div>
        </div>
      </div>
      <div class="footer">
        <button class="btn fun viewResults" @click="itemsStore.filteredSubcategory(), (itemsStore.currentPage = 1)
          ">
          VIEW RESULTS
        </button>
        <button class="btn fun clearAll" @click="reset()">CLEAR ALL</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
div {
  display: block;
}

.product-filter {
  display: flex;
  padding-block: 0.75rem;
  padding-right: 1rem;
  border-bottom: 1px solid var(--dark-color);
}

svg {
  margin-inline: 1rem;
  cursor: pointer;
}

.close-btn {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  padding-top: 0.5rem;
}

.filtering-btn,
.close-filtering {
  border: 0;
  outline: 0;
  padding-inline: 1rem;
  background-color: transparent;
}

.filters {
  display: flex;
  flex-direction: row;
  column-gap: 4rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
}

.filter-title {
  margin-bottom: 10px;
  overflow: visible;
  line-height: 25px;
  font-size: 1rem;
  white-space: nowrap;
  text-transform: uppercase;
}

.filterCategoriesRadio input[type="radio"] {
  margin-right: 0.5rem;
  margin-block: 0.35rem;
}

.wrapper {
  width: 300px;
}

.price-input {
  width: 100%;
  display: flex;
  margin-block: 2rem;
}

.price-input .field {
  display: flex;
  width: 45%;
  height: 40px;
  align-items: center;
}

.field input {
  width: 50%;
  height: 100%;
  outline: 0;
  font-size: 16px;
  margin-left: 12px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid var(--accent-color);
  background-color: var(--bg-color);
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.price-input .separator {
  width: 130px;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
}

.slider {
  height: 5px;
  position: relative;
  background: var(--accent-color);
  border-radius: 5px;
}

.slider .progress {
  height: 100%;
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 5px;
  background: var(--dark-color);
}

.range-input {
  position: relative;
}

.range-input input {
  position: absolute;
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: var(--dark-color);
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}

input[type="range"]::-moz-range-thumb {
  height: 16px;
  width: 16px;
  border: none;
  border-radius: 50%;
  background: var(--dark-color);
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}

.star-rating {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 40px auto;
  position: relative;
}

.star-rating input {
  display: none;
}

.star-rating>label {
  width: 30px;
  height: 30px;
  font-family: Arial;
  font-size: 30px;
  transition: 0.2s ease;
  color: var(--dark-color);
}

.star-rating label:hover {
  color: var(--accent-color);
  transition: 0.2s ease;
}

.star-rating label:active::before {
  transform: scale(1.1);
}

.star-rating label::before {
  content: "\2606";
  position: absolute;
  top: 0px;
  line-height: 26px;
}

.star-rating input:checked~label:before {
  content: "\2605";
}

@-moz-document url-prefix() {
  .star-rating input:checked~label:before {
    font-size: 36px;
    line-height: 21px;
  }
}

.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.footer {
  padding: 12px 6px;
  text-align: left;
  border-block: 1px solid var(--dark-color);
}

.footer button {
  margin: 0.75rem;
  padding: 1rem;
  display: inline-block;
}

@media screen and (max-width: 390px) {
  .product-filter {
    justify-content: center;
  }

  .filter-options {
    display: flex;
    align-items: center;
  }

  .filters {
    display: flex;
    flex-direction: column;
    column-gap: 4rem;
  }

  .price,
  .most-popular {
    padding-top: 2rem;
  }

  .star-rating {
    margin: 0;
    padding-inline: 1rem;
  }
}
</style>
