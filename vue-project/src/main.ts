import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

import { loadModule } from "./dynamic-imports";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

router.beforeEach(async (to, from, next) => {
  if (to.name === "HomeView") {
    // Dynamically load the HomeView component
    const HomeView = await import("@/views/HomeView.vue");
    // const HomeView = await loadModule(() => import("@/views/HomeView.vue"));
    to.component = HomeView;
  }
  next();
});

app.mount("#app");
