<script setup lang="ts">
import { useRouter } from "vue-router";
import { useItems } from "@/stores/itemsStore";
import { useUser } from "@/stores/userStore";
const itemsStore = useItems();
const router = useRouter();
const userStore = useUser();
</script>

<template>
  <div class="low-opacity-bg-image">
    <p class="hero-heading">My Cart</p>
  </div>
  <table>
    <section class="flex-column-align" v-show="itemsStore.getItemsCart.length == 0">
      <h1 class="alert-message">Your cart is currently empty, go ahead and treat yourself!</h1>
      <router-link style="text-decoration: none;" to="/items">
        <button type="button" class="btn fun lighter">CONTINUE SHOPPING</button>
      </router-link>
    </section>
    <thead>
      <tr v-show="itemsStore.getItemsCart.length > 0">
        <th scope="col">IMAGE</th>
        <th scope="col">PRODUCT</th>
        <th scope="col">PRICE</th>
        <th scope="col">QUANTITY</th>
        <th scope="col">TOTAL</th>
        <th scope="col">REMOVE</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="cartItem in itemsStore.getItemsCart">
        <td data-label="ITEM" @click="router.push(`/items/${cartItem.item.model}`)">
          <img :src="cartItem.item.image_url" width="100" />
        </td>
        <td data-label="DESCRIPTION">
          {{ cartItem.item.name }}
        </td>
        <td data-label="PRICE">
          $ {{ Number(cartItem.item.raw_price).toFixed(2) }}
        </td>
        <td data-label="QUANTITY">
          <input type="number" v-model="cartItem.quantity" @change="itemsStore.quantityModification(cartItem)"
            min="1" />
        </td>
        <td data-label="TOTAL">
          $
          {{ (Number(cartItem.item.raw_price) * cartItem.quantity).toFixed(2) }}
        </td>
        <td data-label="REMOVE">
          <button @click="itemsStore.removeLine(cartItem)">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.low-opacity-bg-image {
  --bg-image: url(/src/assets/images/shop/your-cart-image.jpg);
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
  color: var(--primary-brand-color);
}

caption {
  background-image: url(/src/assets/images/shop/your-cart-image.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 120px 0;
  position: relative;
}

table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  color: var(--dark-color);
}

table caption {
  font-size: 3rem;
  margin: 0 0 0.75em;
  color: var(--primary-brand-color);
}

table tr {
  background-color: var(--bg-color);
  border: 0.5px solid var(--light-color);
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}

td {
  text-align: center;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

button,
input,
input[type="number"] {
  border: 0;
  outline: 0;
  text-align: center;
  background-color: transparent;
}

/* Force table to not be like table anymore */
/* table,
thead,
tbody,
th,
td,
tr {
  display: block;
} */
</style>
