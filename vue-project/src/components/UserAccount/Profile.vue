<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useItems } from "@/stores/itemsStore";
import { useUser } from "@/stores/userStore";
import type { UserInterface } from "@/shared/interfaces";

const itemsStore = useItems();
const userStore = useUser();
const router = useRouter();

const SignOut = async () => {
  await userStore.signOut();
  if (!userStore.error) router.push("/home");
};

const user = reactive<UserInterface>({
  name: userStore.currentUser ? userStore.currentUser?.name : "",
  email: userStore.currentUser ? userStore.currentUser?.email : "",
  password: userStore.currentUser ? userStore.currentUser?.password : "",
});
</script>

<template>
  <div class="low-opacity-bg-image">
    <p class="hero-heading">My details</p>
    <p class="hero-sub-heading">Consult or edit your account details</p>
  </div>
  <div class="form-grid">
    <div class="details-hero">
      <router-link style="text-decoration: none" to="/my-purchases">
        <button type="button" class="btn fun lighter">PREVIOUS PURCHASES</button>
      </router-link>
      <button class="btn fun" @click="SignOut">SIGN OUT</button>
    </div>
    <form class="form-layout card margin-top" action="">
      <h1>Personal Information</h1>
      <input v-model="user.name" type="text" id="fname" name="firstname" placeholder="Your first name" />
      <input v-model="userStore.currentDetails.lastname" type="text" id="lname" name="lastname"
        placeholder="Your last name" />
      <input v-model="user.email" type="text" id="email" name="email" placeholder="Your email" />

      <h1>Address</h1>
      <select v-model="userStore.currentDetails.country" id="country" name="country">
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
      <input v-model="userStore.currentDetails.address" type="text" id="street" name="street"
        placeholder="Your address" />
      <input v-model="userStore.currentDetails.postalCode" type="text" id="postalCode" name="postalCode"
        placeholder="Your postal code" />
      <input v-model="userStore.currentDetails.city" type="text" id="city" name="city" placeholder="Your city" />
      <select v-model="userStore.currentDetails.province" id="provinces" name="provinces">
        <option value="usa">Alberta</option>
        <option value="usa">British Columbia</option>
        <option value="usa">Manitoba</option>
        <option value="usa">New Brunswick</option>
        <option value="usa">Newfoundland and Labrador</option>
        <option value="usa">Northwest Territories</option>
        <option value="usa">Nova Scotia</option>
        <option value="usa">Nunavut</option>
        <option value="usa">Ontario</option>
        <option value="usa">Prince Edward Island</option>
        <option value="canada">Quebec</option>
        <option value="usa">Saskatchewan</option>
        <option value="usa">Yukon Territory</option>
      </select>
      <input v-model="userStore.currentDetails.phoneNumber" type="tel" id="phone" name="phone" placeholder="123-456-7890"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />

      <h1>Password</h1>
      <input v-model="user.password" type="password" id="password" name="password" placeholder="Your password" />

      <h1>Payment Information</h1>
      <input v-model="userStore.currentDetails.nameCard" type="text" id="cname" name="cname" placeholder="Name" />
      <input v-model="userStore.currentDetails.numberCard" type="text" id="cnumber" name="cnumber"
        placeholder="Card Number" />
      <input v-model="userStore.currentDetails.expirationDate" type="text" id="exp-date" name="exp-date"
        placeholder="Expiration (mm/yy)" />
      <input v-model="userStore.currentDetails.ccvCard" type="text" id="cvc" name="cvc" placeholder="Security Code" />

      <button type="submit" @click="userStore.saveDetails" class="btn fun margin-top">
        SAVE CHANGES
      </button>
    </form>
  </div>
</template>

<style scoped>
.low-opacity-bg-image {
  --bg-image: url(/src/assets/images/account/pexels-dziana-hasanbekava-7626620.jpg);
  --bg-image-opacity: 1;

  display: grid;
  place-content: center;
  text-align: center;
  min-height: 800px;
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
  background-position: center 20%;
}

.hero-heading {
  color: var(--dark-color);
  margin-top: 40rem;
}

.hero-sub-heading {
  font-size: 1.5rem;
}

.form-grid {
  display: grid;
  justify-content: center;
}

.form-layout {
  width: 100%;
  padding: 2rem 3rem;
  display: grid;
  grid-template-columns: subgrid;
}

.card {
  background-color: var(--light-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

select {
  border: 1px solid var(--invoice-color);
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0px 20px 0px;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
}

form h1 {
  padding-block: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
}

.margin-top {
  margin-top: 1rem;
}

.details-hero {
  margin: 2rem 0 1rem 0;
  display: flex;
  gap: 1rem;
}
</style>
