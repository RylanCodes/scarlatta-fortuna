import { RouteLocationNormalized } from "vue-router";

declare module "vue-router" {
  interface RouteLocationNormalized {
    component?: any;
  }
}
