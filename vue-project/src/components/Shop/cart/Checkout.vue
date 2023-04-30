<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useItems } from "@/stores/itemsStore";
import { useUser } from "@/stores/userStore";
const router = useRouter();
const itemsStore = useItems();
const userStore = useUser();
const cartItemNo = ref(itemsStore.getItemsCart.length);
const emailNewsOffers = ref(true); // or false depending on the default value you want
const sameAddress = ref(true); // or false depending on the default value you want
</script>

<template>
  <div class="row">
    <div class="col-75">
      <div class="container">
        <form action="/">
          <div class="row">
            <div class="col-50">
              <h3>Contact information</h3>
              <label class="margin-bottom" for="cemail">Already have an account?
                <router-link style="text-transform: none; font-weight: 500;" to="/login">
                  Log in
                </router-link>
              </label>
              <input class="cart-login-email" type="email" id="cemail" name="cemail" placeholder="Email">
              <label>
                <!-- <input class="margin-bottom" type="checkbox" checked="checked" name="newsoffers"> Email me with news and
                offers -->
                <input class="margin-bottom" type="checkbox" v-model="emailNewsOffers" name="newsoffers"> Email me with
                news and offers
              </label>
            </div>
          </div>

          <div class="row">
            <div class="col-50">
              <h3>Billing Address</h3>
              <label for="fname"><i class="fa fa-user"></i> Full Name</label>
              <input type="text" id="fname" name="firstname" placeholder="John Doe">
              <label for="email"><i class="fa fa-envelope"></i> Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com">
              <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
              <input type="text" id="adr" name="address" placeholder="542 Keele Street">
              <label for="city"><i class="fa fa-institution"></i> City</label>
              <input type="text" id="city" name="city" placeholder="Toronto">

              <div class="row">
                <div class="col-50">
                  <label for="province">Province</label>
                  <input type="text" id="province" name="province" placeholder="ON">
                </div>
                <div class="col-50">
                  <label for="zip">Postal Code</label>
                  <input type="text" id="zip" name="zip" placeholder="M6N3E2">
                </div>
              </div>

              <!-- TODO SHOW SAVED ADDRESSES SELECT ONLY WHEN USER IS LOGGED IN -->
              <div class="row">
                <div class="col-50">
                  <h3>Saved Addresses</h3>
                  <select id="savedAddress" name="savedAddress">
                    <option value="home">HOME</option>
                    <option value="office">OFFICE</option>
                    <option value="cottage">COTTAGE</option>
                    <option value="neighbour">NEIGHBOUR</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="col-50">
              <h3>Payment</h3>
              <label for="fname">Accepted Cards</label>
              <div class="icon-container">
                <i class="fa fa-cc-visa" style="color:navy;"></i>
                <i class="fa fa-cc-amex" style="color:blue;"></i>
                <i class="fa fa-cc-mastercard" style="color:red;"></i>
                <i class="fa fa-cc-discover" style="color:orange;"></i>
              </div>

              <!--TODO SHOW SAVED CARDS SELECT ONLY WHEN USER IS LOGGED IN -->
              <h3>Saved Cards</h3>
              <select id="savedCards" name="savedCards">
                <option value="visa">VISA</option>
                <option value="american">AMERICAN EXPRESS</option>
                <option value="mastercard">MASTERCARD</option>
                <option value="discover">DISCOVER</option>
              </select>

              <label for="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John Doe">
              <label for="ccnum">Credit Card Number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
              <label for="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="September">

              <div class="row">
                <div class="col-50">
                  <label for="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2026">
                </div>
                <div class="col-50">
                  <label for="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352">
                </div>
              </div>
            </div>

          </div>
          <label>
            <!-- <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing -->
            <input type="checkbox" v-model="sameAddress"> Shipping address same as billing
          </label>
          <router-link style="text-decoration: none;" to="/cart-invoice">
            <!--   pouvoir sauver les achat dans mongodb  @click="itemsStore.savePurchase" -->
            <button type="submit" class="btn fun lighter">PAY NOW</button>
          </router-link>
        </form>
      </div>
    </div>

    <div class="col-25">
      <div class="container cart-font-color summary-50 styled-scrollbars" v-show="itemsStore.getItemsCart.length > 0">
        <h3>My Cart
          <i class="fa fa-shopping-cart cart-font-color"><span class="cartQty">({{
            itemsStore.getItemsCart.length
          }})</span></i>
        </h3>
        <div class="card-grid">
          <div v-for="cartItem in itemsStore.getItemsCart" class="cart-mini-main card">
            <p class="item-name bolder">{{ cartItem.item.name }}</p>
            <div class="flex">
              <label for="qty">Qty:</label>
              <input type="number" v-model="cartItem.quantity" @change="itemsStore.quantityModification(cartItem)" min="1"
                class="item-quantity" />
            </div>
            <p>${{ (Number(cartItem.item.raw_price) * cartItem.quantity).toFixed(2)
            }}
            </p>
            <p @click="itemsStore.removeLine(cartItem)">Remove
              <i class="fa-solid fa-trash-can cart-font-color"></i>
            </p>
            <img :src="cartItem.item.image_url" width="100" />
          </div>
        </div>
        <div class="cart-amounts-recap cart-font-color">
          <div class="flex-space-between">
            <p>Subtotal:</p>
            <p>${{ itemsStore.getCartTotals.subTotal.toFixed(2) }}</p>
          </div>
          <div class="flex-space-between">
            <p>Shipping:</p>
            <p>${{ itemsStore.getCartTotals.shipping.toFixed(2) }}</p>
          </div>
          <div class="flex-space-between">
            <p>GST:</p>
            <p>${{ itemsStore.getCartTotals.gst.toFixed(2) }}</p>
          </div>
          <div class="flex-space-between">
            <p>QST:</p>
            <p>${{ itemsStore.getCartTotals.qst.toFixed(2) }}</p>
          </div>
          <div class="flex-space-between">
            <p class="bolder">TOTAL:</p>
            <p class="bolder">${{ itemsStore.getCartTotals.total.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
form {
  display: unset;
  width: unset;
  margin: 0;
  font-size: unset;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  flex: 25%;
}

.col-50 {
  flex: 50%;
}

.col-75 {
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: var(--light-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 0 0.5rem 2rem 2rem;
}

.summary-50 {
  overflow: auto;
  height: 50vh;
  height: 50dvh;
}

label {
  margin-bottom: 10px;
  display: block;
}

input[type=email]:not(.cart-login-email),
input[type=text]:not(.item-quantity),
select {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
}

select {
  background: linear-gradient(to right,
      var(--primary-brand-color),
      var(--accent-color));
  border: 1px solid linear-gradient(to right,
      var(--primary-brand-color),
      var(--accent-color));
  color: var(--font-btn-color);
  outline: 0;
  border-radius: 4px;
  box-sizing: border-box;
}

.cart-login-email {
  margin-bottom: 20px;
  padding: 12px;
  width: calc(100% - 36vw);
}

.margin-bottom {
  margin-bottom: 1rem;
}

.icon-container {
  margin-bottom: 25px;
  font-size: 2rem;
}

.icon-container i {
  padding-right: 10px;
}

h3 {
  font-size: 1.15rem;
  font-weight: bold;
  padding-bottom: 1rem;
}

.item-name {
  overflow-x: hidden;
  overflow-wrap: break-word;
}

.btn {
  margin: 25px 0px 10px 0px;
  width: 25%;
}

.card-grid {
  display: grid;
  row-gap: 1rem;
  grid-template-columns: minmax(6ch, 20ch) 1fr minmax(6ch, 20ch) 1fr;
  grid-template-columns: minmax(6ch, 20ch) 1fr;
  padding-bottom: 0.75rem;
}

.card {
  display: grid;
  column-gap: 0.5rem;
  grid-column: span 2;
  grid-template-columns: subgrid;
  grid-template-columns: minmax(5ch, 15ch) 1fr;
}

.card label {
  margin: 0;
  padding-block: 0.2rem;
}

.card p,
.card label,
.card input.item-quantity,
.card button {
  grid-column: 2;
  font-size: 0.8rem;
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

.fa-shopping-cart {
  float: right;
}

.cart-amounts-recap {
  border-top: 2px solid var(--accent-color);
  display: flex;
  flex-flow: column wrap;
  padding-top: 0.55rem;
  gap: 0.75rem;
}

.flex {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.flex-space-between {
  display: flex;
  justify-content: space-between;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the "cart" column go on top) */
@media (max-width: 1400px) {
  .row {
    flex-direction: column-reverse;
  }
}
</style>