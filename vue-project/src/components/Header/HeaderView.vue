<script setup lang="ts">
import { useItems } from "@/stores/itemsStore";
import type { RouterLink } from "vue-router";
import CartPopUp from "../Shop/cart/CartPopUp.vue";

const itemsStore = useItems();
let fillSearch: string = "";
</script>

<template>
  <div class="banner">
    <p>FREE SHIPPING ON PURCHASES OF $200 OR MORE</p>
  </div>
  <nav class="nav-wrap">
    <div class="left-nav">
      <ul class="nav-menu items">
        <li class="nav-menu-items">
          <router-link to="/items">SHOP</router-link>
        </li>
        <li class="nav-menu-items">
          <router-link to="/collections">COLLECTIONS</router-link>
        </li>
      </ul>
    </div>
    <div class="center-nav branding">
      <h1><router-link to="/home">Scarlatta Fortuna</router-link></h1>
    </div>
    <div class="right-nav">
      <ul class="nav-menu icons">
        <li class="nav-menu-icons search-box">
          <input type="search" class="search-text" placeholder="Search..." v-model="fillSearch"
            v-show="itemsStore.searchOpen == true" @change="
              itemsStore.searchBar(fillSearch), (itemsStore.currentPage = 1)
            " />
          <a href="#" class="search-btn">
            <router-link to="/items" ><i class="fa-solid fa-magnifying-glass" @click="itemsStore.searchInput()"></i></router-link>
          </a>
        </li>
        <li class="nav-menu-icons">
          <a href="#">FR</a>
        </li>
        <li class="nav-menu-icons">
          <router-link to="/login"><i class="fa-regular fa-user"></i></router-link>
        </li>
        <li class="nav-menu-icons">
          <router-link to="/cart"><i class="fa-solid fa-cart-shopping"><span class="cartQty">({{
            itemsStore.getItemsCart.length
          }})</span></i></router-link>
        </li>
      </ul>
    </div>
  </nav>
  <CartPopUp v-show="itemsStore.isMiniCartOpen == true" />
</template>

<style scoped>
.banner {
  text-align: center;
  font-size: 0.9rem;
  padding-block: 0.35rem;
  background: linear-gradient(to right,
      var(--primary-brand-color),
      var(--accent-color),
      var(--primary-brand-color));
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
}

.nav-menu {
  display: flex;
  line-height: 2.25rem;
}

.items,
.icons {
  display: flex;
  column-gap: 2rem;
}

.items {
  justify-content: flex-start;
  padding-left: 1rem;
}

.icons {
  justify-content: flex-end;
  padding-right: 1rem;
}

.branding h1 a {
  font-size: clamp(1rem, 1rem + 2vw, 2.5rem);
}

@media screen and (max-width: 900px) {
  .nav-wrap {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    grid-template-rows: subgrid;
    grid-template-rows: 50px 40px 40px;
  }

  .nav-menu {
    padding: 0;
  }

  .branding {
    grid-row: 1/2;
  }
}

.search-box {
  background: linear-gradient(to right,
      var(--primary-brand-color),
      var(--accent-color));
  border-radius: 40px;
}

/* .search-box{
    position: absolute;
    top: 12%;
    left: 84%;
    transform: translate(-50%, -50%);
    height: 40px;
    border-radius: 40px;
} */

.search-box:hover>.search-text {
  width: 240px;
  padding-left: 1rem;
  padding-right: 0.5rem;
}

.search-box:focus>.search-btn,
.search-box:hover>.search-btn {
  background: var(--bg-color);
  border: 1px solid linear-gradient(to right,
      var(--primary-brand-color),
      var(--accent-color));
  color: var(--dark-color);
}

.search-btn {
  color: var(--dark-color);
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--light-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: 0.6s;
}

.search-text {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: var(--dark-color);
  font-size: 16px;
  font-weight: normal;
  transition: 0.6s;
  line-height: 40px;
  width: 0px;
}
</style>
