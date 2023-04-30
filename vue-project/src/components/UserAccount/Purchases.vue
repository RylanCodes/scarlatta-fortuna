<script setup lang="ts">
// generate today's date
let currentDate = new Date().toJSON().slice(0, 10);

// declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// generate a random string for the order number
function generateString(length: number) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const randomOrderNumber = generateString(8);

// q: What is the difference between setup and script?
// a: https://v3.vuejs.org/guide/composition-api-setup.html#setup-vs-script 

// q: What does SOLID stand for in OO programming?
// a: https://en.wikipedia.org/wiki/SOLID
// (Single responsibility principle, 
// Open–closed principle,
// Liskov substitution principle,
// Interface segregation principle,
// Dependency inversion principle)

// q: single responsibility principle?
// a: https://en.wikipedia.org/wiki/Single-responsibility_principle
// (A class should have only one reason to change.)

// q: open–closed principle?
// a: https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle
// (Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.)

// q: liskov substitution principle?
// a: https://en.wikipedia.org/wiki/Liskov_substitution_principle   
// (Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.)

// q: interface segregation principle?
// a: https://en.wikipedia.org/wiki/Interface_segregation_principle 
// (Many client-specific interfaces are better than one general-purpose interface.)

// q: dependency inversion principle?
// a: https://en.wikipedia.org/wiki/Dependency_inversion_principle  
// (One should "depend upon abstractions, [not] concretions.")
</script>

<template>
  <div class="low-opacity-bg-image">
    <p class="hero-heading">My purchases</p>
  </div>
  <table>
    <thead>
      <tr>
        <th scope="col">ORDER NUMBER</th>
        <th scope="col">DATE</th>
        <th scope="col">ORDER TOTAL</th>
        <th scope="col">STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Order Number" data-tool-tip="See details">{{ randomOrderNumber }}</td>
        <td data-label="Date">{{ currentDate }}</td>
        <td data-label="Order Total">$1,190</td>
        <td data-label="Status">DELIVERED</td>
      </tr>
      <tr>
        <td data-label="Order Number">{{ randomOrderNumber }}</td>
        <td data-label="Date">{{ currentDate }}</td>
        <td data-label="Order Total">$2,460</td>
        <td data-label="Status">DELIVERED</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.hero-heading {
  color: var(--dark-color);
  margin-bottom: 30rem;
}
.low-opacity-bg-image {
  --bg-image: url(/src/assets/images/account/pexels-cottonbro-studio-7622229.jpg);
  --bg-image-opacity: 1;

  display: grid;
  place-content: center;
  text-align: center;
  min-height: 600px;
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

td[data-tool-tip] {
  position: relative;
}

td[data-tool-tip]::after {
  content: attr(data-tool-tip);
  display: block;
  position: absolute;
  background-color: var(--dark-color);
  padding: 0.5rem;
  opacity: 0.9;
  color: var(--font-btn-color);
  border-radius: 5px;
  font-size: .8rem;
  bottom: 10%;
  left: 60%;
  white-space: nowrap;
  transform: scale(0);
  transition: transform ease-out 150ms, bottom ease-out 150ms;
}

td[data-tool-tip]:hover::after {
  transform: scale(1);
  /* bottom: 100%; */
}

table {
  border: 1px solid var(--light-color);
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  margin-bottom: 2rem;
}

table tr {
  background-color: var(--light-color);
  border: 1px solid var(--light-color);
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
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
    border-bottom: 3px solid var(--light-color);
    display: block;
    margin-bottom: .625em;
  }

  table td {
    border-bottom: 1px solid var(--light-color);
    display: block;
    font-size: .8em;
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
</style>