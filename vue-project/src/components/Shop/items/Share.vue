<script setup lang="ts">
import { ref } from "vue";

const sharedURL = ref(document.URL);
const tooltipMessage = ref("");

function copySharedURL() {
  tooltipMessage.value = "Your URL was copied!";
  navigator.clipboard.writeText(sharedURL.value);

  setTimeout(() => {
    tooltipMessage.value = "";
  }, 3000);
}
</script>

<template>
  <i @click="copySharedURL()" class="fa-regular fa-share-from-square"></i>
  <h3>Share</h3>
  <span class="tooltipMessage">{{ tooltipMessage }}</span>
</template>

<style scoped>
i {
  padding-top: 0.5rem;
}

.tooltipMessage {
  margin-left: 0.5rem;
  font-style: italic;
  border-bottom: 1px dotted var(--dark-color);
  transition: 3s ease-in-out;
}
</style>