import { createRouter, createWebHistory } from "vue-router";
import { useUser } from "./stores";
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from "@/shared/guards";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "intro",
      component: () => import("./views/EntranceView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/HomeView.vue"),
    },
    {
      path: "/items",
      name: "items",
      component: () => import("./views/ShopView.vue"),
    },
    {
      path: "/items/:model",
      name: "ItemDetails",
      component: () => import("./components/Shop/items/ItemDetails.vue"),
    },
    {
      path: "/collections",
      name: "CollectionsView",
      component: () =>
        import("./components/Shop/collections/CollectionsView.vue"),
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: [isNotAuthenticatedGuard],
      component: () => import("./views/AuthenticationView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("./views/CartView.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("./components/Shop/cart/Checkout.vue"),
    },
    {
      path: "/cart-invoice",
      name: "CartInvoice",
      component: () => import("./components/Shop/cart/CartInvoice.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      /* beforeEnter: [isAuthenticatedGuard], */
      component: () => import("./components/UserAccount/Profile.vue"),
    },
    {
      path: "/my-purchases",
      name: "Purchases",
      component: () => import("./components/UserAccount/Purchases.vue"),
    },
    //**/ test carousel
    {
      path: "/carousel",
      name: "Carousel",
      component: () => import("./components/Home/Carousel.vue"),
    },
    {
      path: "/about-us",
      name: "AboutUs",
      component: () => import("./components/Footer/AboutUs.vue"),
    },
    {
      path: "/our-team",
      name: "OurTeam",
      component: () => import("./components/Footer/OurTeam.vue"),
    },
    {
      path: "/stores",
      name: "Stores",
      component: () => import("./components/Footer/Stores.vue"),
    },
    {
      path: "/newsletter",
      name: "Newsletter",
      component: () => import("./components/Footer/Newsletter.vue"),
    },
    {
      path: "/styling",
      name: "Styling",
      component: () => import("./components/Footer/PersonalStyling.vue"),
    },
    {
      path: "/faq",
      name: "FAQ",
      component: () => import("./components/Footer/FAQ.vue"),
    },
    {
      path: "/careers",
      name: "Careers",
      component: () => import("./components/Footer/Careers.vue"),
    },
    {
      path: "/contact-us",
      name: "ContactUs",
      component: () => import("./components/Footer/ContactUs.vue"),
    },
    {
      path: "/orders-shipping",
      name: "OrdersShipping",
      component: () => import("./components/Footer/OrdersShipping.vue"),
    },
    {
      path: "/returns-exchanges",
      name: "ReturnsExchanges",
      component: () => import("./components/Footer/ReturnsExchanges.vue"),
    },
    {
      path: "/404",
      component: () => import("./components/Misc/NotFound.vue"),
    },
    {
      path: "/:notFound(.*)",
      component: () => import("./components/Misc/NotFound.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
router.beforeEach(async () => {
  const userStore = useUser();
  //Ici currentUser = undefined veut dire qu'on a pas encore fait de fetchCurrentUser
  //S'il est à null c'est qu'on a fait le fetchCurrentUser et qu'on a pas de user
  if (userStore.currentUser == undefined) {
    await userStore.fetchCurrentUser();
  }
});
export default router;
