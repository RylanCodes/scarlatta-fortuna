<script setup lang="ts">
import { computed } from "vue";
import ItemPageBanner from "./ItemBanner.vue";
import Share from "./Share.vue";
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { useItems } from "@/stores/itemsStore";
import type { ItemInterface } from "@/shared/interfaces/Item.interface";
const itemsStore = useItems();
const route = useRoute();
const model = route.params.model.toString();
// const item = itemsStore.getOneItem(model);
const item = computed(() => itemsStore.getOneItem(model));

onBeforeRouteLeave((to, from) => {
  itemsStore.isMiniCartOpen = false;
})

const addToCart = () => {
  if (item.value) {
    itemsStore.addItemToCart(item.value);
  }
};
</script>

<template>
  <ItemPageBanner />
  <section class="grid-container">
    <div class="item-image">
      <img v-if="!!item?.image_url" :src="item?.image_url" />
    </div>
    <div class="item-details">
      <h1 class="product-name">{{ `${item?.name}` }}</h1>
      <p class="product-reviews">
        {{ `${Number(item?.likes_count)} reviews` }}
      </p>
      <p class="product-price">
        {{ `$ ${Number(item?.raw_price).toFixed(2)}` }}
      </p>
      <p class="size-selection centered">Size: Select</p>
      <div class="sizes centered">
        <p class="size-options">SMALL</p>
        <p class="size-options">MEDIUM</p>
        <p class="size-options">LARGE</p>
      </div>
      <div class="bag-button">
        <!-- <button class="btn fun" @click="itemsStore.addItemToCart(item)">ADD TO
          SHOPPING BAG</button> -->
        <button class="btn fun" @click="addToCart()">ADD TO
          SHOPPING BAG</button>
      </div>
      <div class="extra-info">
        <div class="flex">
          <i class="fa-solid fa-heart"></i>
          <h3>Add to Wishlist</h3>
        </div>
        <div class="flex">
          <i class="fa-solid fa-shirt"></i>
          <h3>Product Details</h3>
        </div>
        <div class="flex">
          <i class="fa-solid fa-clock"></i>
          <h3>Delivery and Returns</h3>
        </div>
        <div class="flex">
          <Share />
        </div>
      </div>
    </div>
  </section>
  <div class="related-content">
    <h2 class="centered">YOU MAY ALSO LIKE...</h2>
    <div class="grid-wrap related-items">
      <div class="related-item-hover">
        <img src="/src/assets/images/shop/pexels-cottonbro-studio-9953183.jpg">
      </div>
      <div class="related-item-hover">
        <img src="/src/assets/images/shop/pexels-cottonbro-studio-10120626.jpg">
      </div>
      <div class="related-item-hover">
        <img src="/src/assets/images/shop/pexels-cottonbro-studio-6535730.jpg">
      </div>
      <div class="related-item-hover">
        <img src="/src/assets/images/shop/pexels-cottonbro-studio-8558849.jpg">
      </div>
      <div class="related-item-hover">
        <img src="/src/assets/images/shop/pexels-cottonbro-studio-10547285.jpg">
      </div>
      <div class="related-item-hover">
        <img src="/src/assets/images/shop/pexels-vika-kirillova-14979217.jpg">
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  margin-block: 3.5rem;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  inline-size: min(100% - 2rem, 50rem);
  margin-inline: auto;
}

.item-details {
  text-align: center;
}

.item-details p:not(.size-options) {
  padding-top: 1rem;
}

.product-name {
  font-size: 1.5rem;
  padding-top: 1rem;
}

.product-reviews {
  font-size: 0.9rem;
}

.product-price {
  font-size: 1.25rem;
}

.size-selection {
  padding-block: 1rem;
}

.centered {
  text-align: center;
}

.sizes {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sizes>* {
  flex: 1;
}

.size-options {
  border: 2px solid var(--light-color);
  line-height: 30px;
}

.size-options:hover {
  cursor: pointer;
  border: 2px solid var(--accent-color-hover);
}

.bag-button {
  padding-block: 1rem;
  width: 100%;
}

.bag-button button {
  width: 100%;
}

.flex {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
}

.flex h3,
i {
  padding-block: 0.5rem;
}

.related-content {
  padding-top: 4rem;
  padding-bottom: 1rem;
}

h2 {
  color: var(--dark-color);
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0 auto 1rem;
}

.grid-wrap {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  inline-size: min(100% - 2rem, 90rem);
  margin-inline: auto;
}

/* this style affects all the children except the one you're hovering over */
.related-items:hover .related-item-hover:not(:hover) {
  filter: grayscale(100%);
  opacity: 0.75;
}

.related-items:hover .related-item-hover:not(:hover)::after {
  background-color: rgba(#000, 0.5);
}

.related-item-hover {
  /* position: relative; */
  cursor: pointer;
  transition: .3s;
}

/* .related-item-hover::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, 0);
  transition: .3s;
} */
</style>
