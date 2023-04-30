<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useItems } from "@/stores/itemsStore";
const router = useRouter();
const itemsStore = useItems();
const cartItemNo = ref(itemsStore.getItemsCart.length);

function printInvoice() {
  window.print();
}

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

</script>

<template>
  <div class="container">
    <table class="width-100">
      <tr>
        <td>
          <div class="order-confirmation">ORDER CONFIRMATION</div>
        </td>
        <td class="width-20"><button class="btn fun print-invoice" @click="printInvoice">PRINT<br>INVOICE</button></td>
      </tr>
    </table>
    <br><br>
    <h3>Here's your invoice!</h3>
    <p>You can view the entire status of your order by checking your account. If you have questions about your order,
      you can email us at support@scarlattafortuna.com</p><br>
    <table class="width-100 border-collapse">
      <tr>
        <td class="width-50 invoice-bg-color padding-20">
          Date: {{ currentDate }}<br>
          Payment type: Credit Card VISA<br>
          Delivery type: Priority<br>
        </td>
        <td class="invoice-bg-color padding-20">
          Order-number: {{ randomOrderNumber }}<br>
          E-mail: bridgetjones@email.com<br>
          Phone: 819 123-4567<br>
        </td>
      </tr>
    </table><br>
    <table class="width-100">
      <tr>
        <td>
          <table>
            <tr>
              <td class="align-top">
                <div
                  style="background: var(--light-color) url(https://cdn0.iconfinder.com/data/icons/commerce-line-1/512/comerce_delivery_shop_business-07-128.png);width: 50px;height: 50px;margin-right: 10px;background-position: center;background-size: 42px;">
                </div>
              </td>
              <td>
                SHIPPING ADDRESS<br>
                Bridget Jones<br>
                12 rue CSS Queen<br>
                F8B 3K6 Quebec<br>
                Canada
              </td>
            </tr>
          </table>
        </td>
        <td>
          <table>
            <tr>
              <td class="align-top">
                <div
                  style="background: var(--light-color) url(https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Check_circle-128.png) no-repeat;width: 50px;height: 50px;margin-right: 10px;background-position: center;background-size: 25px;">
                </div>
              </td>
              <td>
                BILLING ADDRESS<br>
                Bridget Jones<br>
                12 rue CSS Queen<br>
                F8B 3K6 Quebec<br>
                Canada
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table><br>
    <table class="checkout-details" width="100%">
      <tr>
      <tr>
        <h3>Checkout details</h3>Your checkout made by VISA Card **** **** **** 2478
      </tr>
      </tr>
    </table><br>
    <div
      style="background: var(--light-color) url(https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/shopping-cart-shop-drop-trolly-128.png) no-repeat;width: 50px;height: 50px;margin-right: 10px;background-position: center;background-size: 25px;float: left; margin-bottom: 15px;">
    </div>
    <h3>YOUR ARTICLES</h3>

    <table class="width-100 border-collapse">
      <tr>
        <td class="column-header width-40">Article</td>
        <td class="column-header width-20">Price</td>
        <td class="column-header width-20">Qty</td>
        <td class="column-header width-20">Total</td>
      </tr>
      <tr v-for="cartItem in itemsStore.getItemsCart">
        <td class="row"><span class="sku"># {{ cartItem.item.model }}</span><br>{{ cartItem.item.name }}</td>
        <td class="row">$ {{ Number(cartItem.item.raw_price).toFixed(2) }}</td>
        <td class="row">{{ cartItem.quantity }}</td>
        <td class="row">$
          {{ (Number(cartItem.item.raw_price) * cartItem.quantity).toFixed(2) }}</td>
      </tr>
    </table><br>
    <table class="width-100 invoice-bg-color padding-20">
      <tr>
        <td>
          <table class="width-300 float-right">
            <tr>
              <td>Subtotal:</td>
              <td class="align-right">${{ itemsStore.getCartTotals.subTotal.toFixed(2) }}</td>
            </tr>
            <tr>
              <td>Shipping fee:</td>
              <td class="align-right">${{ itemsStore.getCartTotals.shipping.toFixed(2) }}</td>
            </tr>
            <tr>
              <td>GST:</td>
              <td class="align-right">${{ itemsStore.getCartTotals.gst.toFixed(2) }}</td>
            </tr>
            <tr>
              <td>QST:</td>
              <td class="align-right">${{ itemsStore.getCartTotals.qst.toFixed(2) }}</td>
            </tr>
            <tr>
              <td class="bolder">Grand total:</td>
              <td class="bolder align-right">${{ itemsStore.getCartTotals.total.toFixed(2) }}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <div class="alert">Please note that your delivery could take longer if your order contains online-only items. If you
      need to return these items, you will only be able to do so via our website. Please know that under no
      circumstances will Scarlatta Fortuna ask for banking information by email or text message. If you receive this
      type of
      request, it is a phishing attempt trying to obtain your personal banking information. Please be vigilant.</div>
    <div class="socialmedia">Follow us online
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-snapchat"></i>
      <i class="fa-brands fa-tiktok"></i>
      <i class="fa-brands fa-youtube"></i>
    </div>
  </div>
</template>

<style scoped>
.width-300 {
  width: 300px;
}

.width-50 {
  width: 50%;
}

.width-40 {
  width: 40%;
}

.width-20 {
  width: 20%;
}

.width-100 {
  width: 100%;
}

.padding-20 {
  padding: 20px;
}

.border-collapse {
  border-collapse: collapse;
}

.float-right {
  float: right;
}

.align-right {
  text-align: right;
}

.align-top {
  vertical-align: text-top;
}

.sku {
  color: var(--sku-color);
  font-size: 11px;
}

.container {
  max-width: 680px;
  margin: 0 auto;
}

.order-confirmation {
  background: var(--light-color);
  text-align: center;
  font-size: 1.75rem;
  line-height: 75px;
  letter-spacing: -1px;
}

.print-invoice {
  margin-left: 1.5rem;
  padding-inline: 1.5rem;
  border-radius: unset;
}

.column-header {
  background: var(--invoice-color);
  text-transform: uppercase;
  padding: 15px;
  font-size: 11px;
  border-right: 1px solid var(--invoice-color);
}

.row {
  padding: 7px 14px;
  border-left: 1px solid var(--invoice-color);
  border-right: 1px solid var(--invoice-color);
  border-bottom: 1px solid var(--invoice-color);
}

.alert {
  background: var(--light-color);
  color: var(--font-cart-color);
  padding: 20px;
  margin: 20px 0;
  line-height: 22px;
}

.socialmedia {
  background: var(--invoice-color);
  padding: 20px;
  display: inline-block;
  margin-bottom: 1rem;
}

.socialmedia i {
  padding-left: 0.5rem;
  cursor: pointer;
}
</style>