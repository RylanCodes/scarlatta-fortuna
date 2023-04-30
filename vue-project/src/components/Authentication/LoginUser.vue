<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import type { SigninFormInterface } from "@/shared/interfaces";
import { useRouter } from "vue-router";
import { useUser } from "../../stores";

const state = reactive<SigninFormInterface>({
  email: "",
  password: "",
});
const router = useRouter();
const userStore = useUser()
//Objectif: Connecter l'utilisateur et ouvrir sa page de profile s'il y a lieu
const submit = async () => {
  await userStore.signIn({ ...state })
  if (!userStore.error) router.push("/profile")
};

const hidePassword = ref(true);
const passwordFieldIcon = computed(() => hidePassword.value ? "fa-eye-slash" : "fa-eye");
const passwordFieldType = computed(() => hidePassword.value ? "password" : "text");
</script>

<template>
  <div class="grid card ">
    <div class="form-title">
      <h1>LOG IN <br>
        TO YOUR ACCOUNT</h1>
    </div>
    <form class="fontpassword" @submit.prevent="">
      <input v-model="state.email" type="email" name="email" placeholder="Email address">
      <input v-model="state.password" :type="passwordFieldType" name="password" placeholder="Password">
      <i class="fas" :class="[passwordFieldIcon]" @click="hidePassword = !hidePassword"></i>
      <button type="submit" name="button" class="btn fun" @click="submit">SIGN IN</button>
      <h5 class="underline-offset centered">Forgotten your password?</h5>
      <p>{{ userStore.error }}</p>
    </form>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  justify-content: center;
  grid-auto-flow: row;
}

.card {
  display: grid;
  grid-template-rows: 100px 1fr;
  background-color: var(--light-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding-top: 2rem;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.form-title h1 {
  border-bottom: 1px solid var(--dark-color);
  padding-bottom: 4px;
  line-height: 1.5rem;
  font-size: 1.25rem;
  color: var(--dark-color);
  width: 240px;
  margin: auto;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.6em;
  padding: 0.5em;
  margin-bottom: 1em;
}

h5 {
  font-size: 0.85rem;
  line-height: 1.5rem;
  padding-block: 1rem;
}

.fontpassword {
  position: relative;
}

i {
  position: absolute;
  right: 15px;
  top: 70px;
}

.btn {
  display: block;
  margin: auto;
  width: 100%;
}

.centered {
  text-align: center;
}

form {
  display: unset;
  width: unset;
  /* margin: unset; */
}
</style>