<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'
import ItemPageBanner from "./ItemBanner.vue";
import Filter from "./Filter.vue";
import Sort from "./Sort.vue";
import { useItems } from "@/stores/itemsStore";
const itemsStore = useItems();

onBeforeRouteLeave((to, from) => {
  itemsStore.isMiniCartOpen = false;
})

</script>

<template>
  <ItemPageBanner />
  <Filter />
  <Sort />
  <div class="itemPerPage">
    <p>ITEM PER PAGE</p>
    <span class="separator"> | </span>
    <button @click="itemsStore.displayedItems(10)" class="underline-offset">10</button>
    <span class="separator"> | </span>
    <button @click="itemsStore.displayedItems(100)" class="underline-offset">100</button>
    <span class="separator"> | </span>
    <button @click="itemsStore.displayedItems(300)" class="underline-offset">300</button>
  </div>
  <div class="items-container">
    <div v-for="item in itemsStore.getItemsTempArray" :key="item.id">
      <div class="product-container">
        <div class="product-image">
          <img v-if="!!item.image_url" :src="item.image_url" />
        </div>
        <div class="product-info">
          <h1 class="product-name">{{ `${item.name}` }}</h1>
          <p class="product-price">
            {{ `$ ${Number(item.raw_price).toFixed(2)}` }}
          </p>
          <div class="details">
            <router-link :to="{ name: 'ItemDetails', params: { model: item.model } }" class="nav-menu-links">FULL
              DETAILS</router-link>
            <div class="tooltip addItem">
              <button @click="itemsStore.addItemToCart(item)">
                <i class="fa-solid fa-plus"></i>
              </button>
              <span class="tooltiptext">ADD TO CART</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pagination">
    <button @click="itemsStore.currentPage--" v-if="itemsStore.currentPage > 1">
      <i class="fa-solid fa-caret-left"></i>
    </button>
    <p>
      PAGE: {{ itemsStore.currentPage }}/{{ Math.ceil(itemsStore.lastPage()) }}
    </p>
    <button @click="itemsStore.currentPage++" v-if="itemsStore.currentPage < Math.ceil(itemsStore.lastPage())">
      <i class="fa-solid fa-caret-right"></i>
    </button>
  </div>
</template>

<style scoped>
.itemPerPage {
  display: flex;
  align-content: center;
  justify-content: flex-end;
  padding-bottom: 1rem;
}

.itemPerPage p {
  padding-right: 1rem;
}

separator {
  border: 1px solid var(--dark-color);
  width: 10px;
  height: 25px;
}

button {
  border: 0;
  outline: 0;
  padding-inline: 1rem;
  background-color: transparent;
}

.items-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.product-container {
  display: flex;
  flex-flow: column wrap;
  column-gap: 5rem;
  margin: 0 auto;
  padding-inline: 4rem;
  padding-block: 2rem;
}

.product-name {
  max-width: 25ch;
  font-size: 1.25rem;
}

.product-price {
  padding-top: 1rem;
  font-size: 1rem;
}

.details {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
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

.addItem {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}

.pagination {
  display: flex;
  align-content: center;
  justify-content: flex-end;
  padding-block: 1rem;
}

@media only screen and (max-width: 600px) {

  .product-image,
  .product-info {
    margin-left: 10px;
    width: 100%;
  }
}
</style>
