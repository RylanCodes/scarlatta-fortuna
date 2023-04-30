<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from "vue-router";
import { useItems } from "@/stores/itemsStore";
import type { ItemInterface } from "@/shared/interfaces/Item.interface";

const itemsStore = useItems();
// Get the router instance for this component
const router = useRouter()

interface Offer {
  name: string
  model: string
  price: number
  image_url: string
}

// Define reactive references for the first, second, and third offers
const firstOffer = ref<Offer | null>(null)
const secondOffer = ref<Offer | null>(null)
const thirdOffer = ref<Offer | null>(null)

// Define reactive references for the timers associated with each offer
const firstPromotionTimer = ref(0)
const secondPromotionTimer = ref(0)
const thirdPromotionTimer = ref(0)

// Generate a new offer object by selecting three random items from the items store
function generateOffer(): Offer {
  const items = itemsStore.items
  const randomItems: ItemInterface[] = []
  // Keep selecting random items until we have three unique ones
  while (randomItems.length < 3) {
    const item = items[Math.floor(Math.random() * items.length)]
    if (!randomItems.includes(item)) {
      randomItems.push(item)
    }
  }
  // Return an offer object that contains the name, model, price, and image URL of the first random item
  return {
    name: randomItems[0].name,
    model: randomItems[0].model,
    price: +(randomItems[0]?.raw_price ?? 0) * 1.2, // Increase the price of the offer by 20%
    // price: randomItems[0] ? +randomItems[0].raw_price * 1.2 : 0,
    image_url: randomItems[0].image_url,
  }
}

// Set the first, second, and third offers and reset the timers for each offer
function setOffers() {
  // Reset the timers for each offer to 2 hours (7200 seconds)
  firstPromotionTimer.value = 7200
  secondPromotionTimer.value = 7200
  thirdPromotionTimer.value = 7200

  // Generate new offers
  firstOffer.value = generateOffer()
  secondOffer.value = generateOffer()
  thirdOffer.value = generateOffer()
}

function handleButtonClick() {
  // Reset the timers to their initial values of 7200 seconds
  firstPromotionTimer.value = 7200
  secondPromotionTimer.value = 7200
  thirdPromotionTimer.value = 7200

  // Call the setOffers() function to generate new offers
  setOffers()
}


// Define a function that starts a timer for a given time limit, updating a reactive reference
// with the remaining time every second until the time limit is reached
const startPromotionTimer = (timerName: { value: number }, timeLimit: number) => {
  const now = Date.now(); // Get the current time in milliseconds
  const endTime = now + timeLimit; // Calculate the end time of the timer

  // Set the value of the timer's property on the component's reactive data object
  // to the remaining time on the timer in seconds
  timerName.value = Math.floor((endTime - now) / 1000);

  // Create an interval that will update the timer's property on the component's
  // reactive data object every second
  const intervalId = setInterval(() => {
    const remainingTime = Math.floor((endTime - Date.now()) / 1000); // Calculate the remaining time on the timer in seconds

    if (remainingTime <= 0) {
      // If the remaining time on the timer is zero or negative, clear the interval,
      // and set the timer's property on the component's reactive data object to zero
      clearInterval(intervalId);
      timerName.value = 0;
    } else {
      // If there is still time remaining on the timer, update the timer's property on
      // the component's reactive data object to the remaining time on the timer in seconds
      timerName.value = remainingTime;
    }
  }, 1000);
};

// Watch promotion timers and set new offers when timer expires
watch([firstPromotionTimer, secondPromotionTimer, thirdPromotionTimer], ([first, second, third]) => {
  // Check if all promotion timers have expired
  if (first === 0 && second === 0 && third === 0) {
    // Generate new offers
    setOffers()
  }
})

// Computed property to format time as string
function timerString(timer: number): string {
  // Calculate minutes and pad with leading zero if necessary
  const minutes = Math.floor(timer / 60).toString().padStart(2, '0')
  // Calculate seconds and pad with leading zero if necessary
  const seconds = (timer % 60).toString().padStart(2, '0')
  // Return formatted time string
  return `${minutes}:${seconds}`
}

/* // Computed properties for offer prices
function firstOfferPrice() {
  // Return computed property that formats the first offer price to two decimal places
  return computed(() => (firstOffer.value ? firstOffer.value.price.toFixed(2) : ''))
}

function secondOfferPrice() {
  // Return computed property that formats the second offer price to two decimal places
  return computed(() => (secondOffer.value ? secondOffer.value.price.toFixed(2) : ''))
}

function thirdOfferPrice() {
  // Return computed property that formats the third offer price to two decimal places
  return computed(() => (thirdOffer.value ? thirdOffer.value.price.toFixed(2) : ''))
} */

// Computed properties for offer prices
const firstOfferPrice = computed(() => (firstOffer.value ? firstOffer.value.price.toFixed(2) : ''))
const secondOfferPrice = computed(() => (secondOffer.value ? secondOffer.value.price.toFixed(2) : ''))
const thirdOfferPrice = computed(() => (thirdOffer.value ? thirdOffer.value.price.toFixed(2) : ''))


// Generate new offer for each item
function firstOfferRandomizer() {
  // Generate new offer for the first item
  firstOffer.value = generateOffer()
  // Reset the promotion timer for the first item to two hours (7200 seconds)
  firstPromotionTimer.value = 7200

  startPromotionTimer(firstPromotionTimer, 7200)
}

function secondOfferRandomizer() {
  // Generate new offer for the second item
  secondOffer.value = generateOffer()
  // Reset the promotion timer for the second item to two hours (7200 seconds)
  secondPromotionTimer.value = 7200

  startPromotionTimer(secondPromotionTimer, 7200)
}

function thirdOfferRandomizer() {
  // Generate new offer for the third item
  thirdOffer.value = generateOffer()
  // Reset the promotion timer for the third item to two hours (7200 seconds)
  thirdPromotionTimer.value = 7200

  startPromotionTimer(thirdPromotionTimer, 7200)
}

// Initialize offers and promotion timers
setOffers()

// Start promotion timers
startPromotionTimer(firstPromotionTimer, 7200);
startPromotionTimer(secondPromotionTimer, 7200);
startPromotionTimer(thirdPromotionTimer, 7200);

/* let hourAndDate = new Date().getTime();
let previousfirstOfferTimer = JSON.parse(
  localStorage.firstPromotionEndingDate || 0
);
let firstTimer = ref(previousfirstOfferTimer);
let firstPromotionTimer = ref(firstTimer.value - hourAndDate);
let firstOfferPrice = ref(() => {
  if (firstPromotionTimer.value > 0) {
    firstOffer.value.raw_price = localStorage.firstPromotionNewPrice;
    return localStorage.firstPromotionNewPrice;
  } else {
    firstOffer.value.raw_price = localStorage.firstPromotionOldPrice;
    return localStorage.firstPromotionOldPrice;
  }
});

let previousFirstOffer =
  itemsStore.getOneItem(localStorage.firstOfferString) ||
  itemsStore.getItems[0];
let firstOffer = ref(previousFirstOffer);

let previousSecondOfferTimer = JSON.parse(
  localStorage.secondPromotionEndingDate || 0
);
let secondTimer = ref(previousSecondOfferTimer);
let secondPromotionTimer = ref(secondTimer.value - hourAndDate);
let secondOfferPrice = ref(() => {
  if (secondPromotionTimer.value > 0) {
    secondOffer.value.raw_price = localStorage.secondPromotionNewPrice;
    return localStorage.secondPromotionNewPrice;
  } else {
    secondOffer.value.raw_price = localStorage.secondPromotionOldPrice;
    return localStorage.secondPromotionOldPrice;
  }
});

let previousSecondOffer =
  itemsStore.getOneItem(localStorage.secondOfferString) ||
  itemsStore.getItems[1];
let secondOffer = ref(previousSecondOffer);

let previousThirdOfferTimer = JSON.parse(
  localStorage.thirdPromotionEndingDate || 0
);
let thirdTimer = ref(previousThirdOfferTimer);
let thirdPromotionTimer = ref(thirdTimer.value - hourAndDate);
let thirdOfferPrice = ref(() => {
  if (thirdPromotionTimer.value > 0) {
    thirdOffer.value.raw_price = localStorage.thirdPromotionNewPrice;
    return localStorage.thirdPromotionNewPrice;
  } else {
    thirdOffer.value.raw_price = localStorage.thirdPromotionOldPrice;
    return localStorage.thirdPromotionOldPrice;
  }
});

let previousThirdOffer =
  itemsStore.getOneItem(localStorage.thirdOfferString) ||
  itemsStore.getItems[2];
let thirdOffer = ref(previousThirdOffer);

const startTimerFirst = () => {
  setInterval(() => {
    if (firstPromotionTimer.value > 0) {
      firstPromotionTimer.value = firstPromotionTimer.value - 1000;
    }
  }, 1000);
};
const startTimerSecond = () => {
  setInterval(() => {
    if (secondPromotionTimer.value > 0) {
      secondPromotionTimer.value = secondPromotionTimer.value - 1000;
    }
  }, 1000);
};

const startTimerThird = () => {
  setInterval(() => {
    if (thirdPromotionTimer.value > 0) {
      thirdPromotionTimer.value = thirdPromotionTimer.value - 1000;
    }
  }, 1000);
};

function timerString(timeLeft: number) {
  let days = ref(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  let hours = ref(
    Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let minutes = ref(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
  let seconds = ref(Math.floor((timeLeft % (1000 * 60)) / 1000));

  return `${days.value}:${hours.value}:${minutes.value}:${seconds.value}`;
}

function firstOfferRandomizer() {
  firstOffer.value =
    itemsStore.getItems[Math.floor(Math.random() * itemsStore.getItems.length)];
  hourAndDate = new Date().getTime();
  firstTimer.value = hourAndDate + 20000;
  localStorage.setItem("firstOfferString", firstOffer.value.model);
  firstOffer.value = itemsStore.getOneItem(localStorage.firstOfferString);
  localStorage.setItem("firstPromotionEndingDate", firstTimer.value);
  localStorage.setItem("firstPromotionOldPrice", firstOffer.value.raw_price);
  let newPrice = itemsStore.applyPromotion(firstOffer.value.model);
  if (newPrice) {
    localStorage.setItem("firstPromotionNewPrice", newPrice.raw_price);
  }
  hourAndDate = new Date().getTime();
  firstTimer.value = hourAndDate + 20000;
  firstPromotionTimer.value = firstTimer.value - hourAndDate;
}

function secondOfferRandomizer() {
  secondOffer.value =
    itemsStore.getItems[Math.floor(Math.random() * itemsStore.getItems.length)];
  hourAndDate = new Date().getTime();
  secondTimer.value = hourAndDate + Math.random() * 86400000;
  localStorage.setItem("secondOfferString", secondOffer.value.model);
  secondOffer.value = itemsStore.getOneItem(localStorage.secondOfferString);
  localStorage.setItem("secondPromotionEndingDate", secondTimer.value);
  localStorage.setItem("secondPromotionOldPrice", secondOffer.value.raw_price);
  let newPrice = itemsStore.applyPromotion(secondOffer.value.model);
  if (newPrice) {
    localStorage.setItem("secondPromotionNewPrice", newPrice.raw_price);
  }
  hourAndDate = new Date().getTime();
  secondPromotionTimer.value = secondTimer.value - hourAndDate;
}

function thirdOfferRandomizer() {
  thirdOffer.value =
    itemsStore.getItems[Math.floor(Math.random() * itemsStore.getItems.length)];
  hourAndDate = new Date().getTime();
  thirdTimer.value = hourAndDate + Math.random() * 86400000;
  localStorage.setItem("thirdOfferString", thirdOffer.value.model);
  thirdOffer.value = itemsStore.getOneItem(localStorage.thirdOfferString);
  localStorage.setItem("thirdPromotionEndingDate", thirdTimer.value);
  localStorage.setItem("thirdPromotionOldPrice", thirdOffer.value.raw_price);
  let newPrice = itemsStore.applyPromotion(thirdOffer.value.model);
  if (newPrice) {
    localStorage.setItem("thirdPromotionNewPrice", newPrice.raw_price);
  }
  hourAndDate = new Date().getTime();
  thirdPromotionTimer.value = thirdTimer.value - hourAndDate;
}

startTimerFirst();
startTimerSecond();
startTimerThird(); */
</script>

<template>
  <div class="content flow">
    <h1 class="title">FEATURED PRODUCTS</h1>
    <div class="offers-grid">
      <div class="card">
        <img :src="firstOffer?.image_url" @click="router.push(`/items/${firstOffer?.model}`)" />
        <p class="product-name">{{ firstOffer?.name }}</p>
        <!-- <p class="product-price">${{ firstOfferPrice() }}</p> -->
        <p class="product-price">$ {{ firstOfferPrice }}</p>
        <div class="details">
          <router-link :to="{ name: 'ItemDetails', params: { model: firstOffer?.model } }">FULL DETAILS</router-link>
          <div class="tooltip addItem">
            <button v-if="firstOffer && firstPromotionTimer > 0" @click="itemsStore.addItemToCart(firstOffer)">
              <i class="fa-solid fa-plus"></i>
            </button>
            <span class="tooltiptext">ADD TO CART</span>
          </div>
        </div>
        <div v-if="firstPromotionTimer > 0">
          {{ timerString(firstPromotionTimer) }}
        </div>
        <div v-else class="offer-expired">Offer Expired</div>
        <button v-on:click="firstOfferRandomizer" class="btn fun centered">GENERATE NEW OFFER</button>
      </div>

      <div class="card">
        <img :src="secondOffer?.image_url" @click="router.push(`/items/${secondOffer?.model}`)" />
        <p class="product-name">{{ secondOffer?.name }}</p>
        <!-- <p class="product-price">${{ secondOfferPrice() }}</p> -->
        <p class="product-price">$ {{ secondOfferPrice }}</p>
        <div class="details">
          <router-link :to="{ name: 'ItemDetails', params: { model: secondOffer?.model } }">FULL DETAILS</router-link>
          <div class="tooltip addItem">
            <button v-if="secondOffer && secondPromotionTimer > 0" @click="itemsStore.addItemToCart(secondOffer)">
              <i class="fa-solid fa-plus"></i>
            </button>
            <span class="tooltiptext">ADD TO CART</span>
          </div>
        </div>
        <div v-if="secondPromotionTimer > 0">
          {{ timerString(secondPromotionTimer) }}
        </div>
        <div v-else class="offer-expired">Offer Expired</div>
        <button v-on:click="secondOfferRandomizer" class="btn fun centered">GENERATE NEW OFFER</button>
      </div>

      <div class="card">
        <img :src="thirdOffer?.image_url" @click="router.push(`/items/${thirdOffer?.model}`)" />
        <p class="product-name">{{ thirdOffer?.name }}</p>
        <!-- <p class="product-price">${{ thirdOfferPrice() }}</p> -->
        <p class="product-price">$ {{ thirdOfferPrice }}</p>
        <div class="details">
          <router-link :to="{ name: 'ItemDetails', params: { model: thirdOffer?.model } }">FULL DETAILS</router-link>
          <div class="tooltip addItem">
            <button v-if="thirdOffer && thirdPromotionTimer > 0" @click="itemsStore.addItemToCart(thirdOffer)">
              <i class="fa-solid fa-plus"></i>
            </button>
            <span class="tooltiptext">ADD TO CART</span>
          </div>
        </div>
        <div v-if="thirdPromotionTimer > 0">
          {{ timerString(thirdPromotionTimer) }}
        </div>
        <div v-else class="offer-expired">Offer Expired</div>
        <button v-on:click="thirdOfferRandomizer" class="btn fun centered">GENERATE NEW OFFER</button>
      </div>
    </div>
  </div>

  <!-- OLD CODE BELOW
  <div class="content flow">
    <h1 class="title">FEATURED PRODUCTS</h1>
    <div class="offers-grid">
      <div class="card">
        <img :src="firstOffer.image_url" @click="router.push(`/items/${firstOffer.model}`)" />
        <p class="product-name">{{ firstOffer.name }}</p>
        <p class="product-price">${{ firstOfferPrice() }}</p>
        <div class="details">
          <router-link :to="{ name: 'ItemDetails', params: { model: firstOffer.model } }">FULL
            DETAILS</router-link>
          <div class="tooltip addItem">
            <button v-if="firstPromotionTimer > 0" @click="itemsStore.addItemToCart(firstOffer)">
              <i class="fa-solid fa-plus"></i>
            </button>
            <span class="tooltiptext">ADD TO CART</span>
          </div>
        </div>
        <div v-if="firstPromotionTimer > 0">
          {{ timerString(firstPromotionTimer) }}
        </div>
        <div v-else class="offer-expired">Offer Expired</div>
        <button v-on:click="firstOfferRandomizer" class="btn fun centered">GENERATE NEW OFFER</button>
      </div>

      <div class="card">
        <img :src="secondOffer.image_url" @click="router.push(`/items/${secondOffer.model}`)" />
        <p class="product-name">{{ secondOffer.name }}</p>
        <p class="product-price">${{ secondOfferPrice() }}</p>
        <div class="details">
          <router-link :to="{ name: 'ItemDetails', params: { model: secondOffer.model } }">FULL
            DETAILS</router-link>
          <div class="tooltip addItem">
            <button v-if="secondPromotionTimer > 0" @click="itemsStore.addItemToCart(secondOffer)">
              <i class="fa-solid fa-plus"></i>
            </button>
            <span class="tooltiptext">ADD TO CART</span>
          </div>
        </div>
        <div v-if="secondPromotionTimer > 0">
          {{ timerString(secondPromotionTimer) }}
        </div>
        <div v-else class="offer-expired">Offer Expired</div>
        <button v-on:click="secondOfferRandomizer" class="btn fun centered">GENERATE NEW OFFER</button>
      </div>

      <div class="card">
        <img :src="thirdOffer.image_url" @click="router.push(`/items/${thirdOffer.model}`)" />
        <p class="product-name">{{ thirdOffer.name }}</p>
        <p class="product-price">${{ thirdOfferPrice() }}</p>
        <div class="details">
          <router-link :to="{ name: 'ItemDetails', params: { model: thirdOffer.model } }">FULL
            DETAILS</router-link>
          <div class="tooltip addItem">
            <button v-if="thirdPromotionTimer > 0" @click="itemsStore.addItemToCart(thirdOffer)">
              <i class="fa-solid fa-plus"></i>
            </button>
            <span class="tooltiptext">ADD TO CART</span>
          </div>
        </div>
        <div v-if="thirdPromotionTimer > 0">
          {{ timerString(thirdPromotionTimer) }}
        </div>
        <div v-else class="offer-expired">Offer Expired</div>
        <button v-on:click="thirdOfferRandomizer" class="btn fun centered">GENERATE NEW OFFER</button>
      </div>
    </div>
  </div> -->
</template>

<style scoped>
h1 {
  background: linear-gradient(to right,
      var(--accent-color),
      var(--primary-brand-color),
      var(--accent-color));
  color: var(--font-btn-color);
  font-size: 2rem;
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 0.5rem;
}

.offers-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  inline-size: min(100% - 8rem, 70rem);
  margin-inline: auto;
  padding-top: 2rem;
}

.card {
  background-color: var(--light-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  text-align: center;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: subgrid;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card img {
  margin-inline: auto;
}

.product-name {
  padding-top: 1rem;
  padding-inline: 0.5rem;
  font-size: 1.25rem;
}

.product-price {
  padding-top: 1rem;
  font-size: 1rem;
}

.details {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-left: 0.5rem;
}

button {
  border: 0;
  outline: 0;
  padding-left: 1rem;
  background-color: transparent;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: var(--dark-color);
  color: var(--font-btn-color);
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 1s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.offer-expired {
  color: var(--danger-color);
  font-size: 1.25rem;
  font-style: italic;
  text-align: center;
}

.centered {
  margin: 0 auto;
  margin-top: 1rem;
}

@media screen and (max-width: 400px) {
  .offers-grid {
    inline-size: unset;
  }
}
</style>