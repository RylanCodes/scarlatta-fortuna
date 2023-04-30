<script setup lang="ts">
import { useItems } from "@/stores/itemsStore";
const itemsStore = useItems();
</script>

<template>
  <div class="product-sort">
    <i class="fa-solid fa-arrow-up-wide-short" v-if="itemsStore.sortOrder == true"></i>
    <i class="fa-solid fa-arrow-down-wide-short" v-else></i>
    <p class="sortBy">SORT BY:</p>
    <div class="sort-options">
      <button class="sorting-btn underline-offset" @click="itemsStore.priceSorted">PRICE</button>
      <span class="separator"> | </span>
      <button class="sorting-btn underline-offset" @click="itemsStore.likeSorted">
        MOST POPULAR
      </button>
    </div>
  </div>
</template>

<style scoped>
.product-sort {
  display: flex;
  padding-block: 0.75rem;
  padding-right: 1rem;
}

.fa-arrow-up-wide-short,
.fa-arrow-down-wide-short {
  margin-inline: 1rem;
  padding-left: 0.25rem;
}

.sortBy {
  padding-left: 0.2rem;
  padding-right: 0.65rem;
}

.sort-options button {
  border: 0;
  outline: 0;
  padding-inline: 1rem;
  background-color: transparent;
}

@media screen and (max-width: 390px) {
  .product-sort {
    justify-content: center;
    padding-right: 0;
    padding-bottom: 2rem;
  }
}
</style>
