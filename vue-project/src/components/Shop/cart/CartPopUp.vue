<script setup lang="ts">
import { useRouter } from "vue-router";
import { useItems } from "@/stores/itemsStore";
const itemsStore = useItems();
const router = useRouter();
</script>

<template>
  <Transition name="custom-classes" enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp">
    <div class="cart-mini-wrapper grow summary">
      <div v-show="itemsStore.isMiniCartOpen == true">
        <div class="cart-mini-hero">
          <h1 class="cart-font-color">My Cart</h1>
          <i @click="itemsStore.isMiniCartOpen = false" class="fa-solid fa-circle-xmark"></i>
        </div>
        <div class="card-grid">
          <div v-for="cartItem in itemsStore.getItemsCart" class="cart-mini-main card">
            <h2 class="item-name">{{ cartItem.item.name }}</h2>
            <div>
              <label for="qty" class="qty cart-font-color">Qty: </label>
              <input type="number" v-model="cartItem.quantity" @change="itemsStore.quantityModification(cartItem)"
                min="1" class="item-quantity cart-font-color" />
            </div>
            <p class="cart-font-color bolder">${{ (Number(cartItem.item.raw_price) * cartItem.quantity).toFixed(2)
            }}</p>
            <p class="item-remove cart-font-color" @click="itemsStore.removeLine(cartItem)">Remove
              <i class="fa-solid fa-trash-can cart-font-color"></i>
            </p>
            <img :src="cartItem.item.image_url" class="item-image" width="100"
              @click="router.push(`/items/${cartItem.item.model}`)" />
          </div>
          <div class="cart-buttons">
            <router-link style="text-decoration: none;" to="/cart">
              <button type="button" class="btn fun lighter">VIEW CART</button>
            </router-link>
            <router-link style="text-decoration: none;" to="/checkout">
              <button type="button" class="btn fun lighter">CHECK OUT</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.summary {
  overflow: auto;
  max-height: 50vh;
  max-height: 50dvh;
}

.cart-mini-wrapper {
  display: block;
  padding: 1rem;
  width: min(50%, 400px);
  background-color: var(--bg-color);
  border: 2px solid var(--accent-color);
  position: absolute;
  right: 1%;
  z-index: 99;
  font-size: clamp(100%, 0.75rem, 1.5rem);
}

.cart-mini-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding-bottom: 1rem;
}

.card-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(6ch, 20ch) 1fr;
  overflow-x: hidden;
  overflow-wrap: break-word;
}

.card {
  display: grid;
  grid-column: span 2;
  grid-template-columns: minmax(5ch, 15ch) 1fr;
}

.card h2 {
  grid-column: 2;
  font-weight: bold;
}

.card p,
.card input.item-quantity,
.card button {
  grid-column: 2;
}

.card img {
  grid-column: 1;
  grid-row: 1/5;
}

button,
input,
input[type="number"] {
  border: 0;
  outline: 0;
  text-align: start;
  background-color: transparent;
}

input[type="number"] {
  max-width: 20%;
}

input[type="number"]:hover {
  cursor: pointer;
}

.cart-buttons {
  grid-column: span 2;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
}

@media screen and (max-width: 615px) {
  .cart-buttons button {
    font-size: 0.75rem;
    text-align: center;
  }

  .card img {
    padding-right: 0.5rem;
  }
}
</style>