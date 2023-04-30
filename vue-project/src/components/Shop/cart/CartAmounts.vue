<script setup lang="ts">
import { useItems } from "@/stores/itemsStore";
import { useUser } from "@/stores/userStore";
const itemsStore = useItems();
const userStore = useUser();
</script>

<template>
  <div class="grid cart-font-color" v-show="itemsStore.getItemsCart.length > 0">
    <p>Subtotal:</p>
    <p>${{ itemsStore.getCartTotals.subTotal.toFixed(2) }}</p>
    <p>Shipping:</p>
    <p>${{ itemsStore.getCartTotals.shipping.toFixed(2) }}</p>
    <p>GST:</p>
    <p>${{ itemsStore.getCartTotals.gst.toFixed(2) }}</p>
    <p>QST:</p>
    <p>${{ itemsStore.getCartTotals.qst.toFixed(2) }}</p>
    <p class="bolder">TOTAL:</p>
    <p class="bolder">${{ itemsStore.getCartTotals.total.toFixed(2) }}</p>
  </div>
  <div class="cart-buttons" v-show="itemsStore.getItemsCart.length > 0">
    <router-link style="text-decoration: none" to="/items">
      <button type="button" class="btn fun lighter">CONTINUE SHOPPING</button>
    </router-link>
    <router-link style="text-decoration: none" to="/checkout">
      <button type="button" class="btn fun lighter">CHECK OUT</button>
    </router-link>
  </div>
</template>

<style scoped>
.grid {
  padding-block: 1rem;
  display: grid;
  justify-content: end;
  row-gap: 1rem;
  grid-template-columns: minmax(5ch, 20ch) minmax(5ch, 10ch);
}

.cart-buttons {
  margin: 1rem;
  display: flex;
  gap: 1rem;
  flex-flow: row wrap;
  justify-content: flex-end;
}
</style>
