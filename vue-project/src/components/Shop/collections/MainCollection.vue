<script setup lang="ts">
// regex to mathc the phone number in the format (xxx) xxx-xxxx
const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;

// test phoneRegex against a phone number with console.log
console.log(phoneRegex.test('(123) 456-7890')); // true
console.log(phoneRegex.test('(123) 456-789')); // false

// create a function to validate the phone number
function validatePhone(phone: string) {
  return phoneRegex.test(phone);
}

// create unit tests for the validatePhone function
</script>

<template>
  <!-- create a bulleted list of 3 items -->
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
</template>

<style scoped></style>