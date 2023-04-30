import { useItems } from "@/stores/itemsStore";
import { defineStore } from "pinia";
import {
  signIn,
  fetchCurrentUser,
  createUser,
  signOut,
  updateUserDetail,
} from "@/shared/services";
import type { CartItemInterface } from "@/shared/interfaces/Cart.interface";
import type { DetailsInterface } from "@/shared/interfaces/Details.interface";
import type {
  UserInterface,
  UserFormInterface,
  SigninFormInterface,
} from "@/shared/interfaces";

interface UserState {
  //Ici currentUser = undefined veut dire qu'on a pas encore fait de fetchCurrentUser
  //S'il est à null c'est qu'on a fait le fetchCurrentUser et qu'on a pas de user
  currentUser: UserInterface | null | undefined;
  currentDetails: DetailsInterface;
  error: any;
  itemsCart: CartItemInterface[];
  userSignIn: UserInterface | null;
}

export const useUser = defineStore("user", {
  state: (): UserState => ({
    currentDetails: {
      lastname: "",
      country: "",
      address: "",
      postalCode: "",
      city: "",
      province: "",
      phoneNumber: "",
      nameCard: "",
      numberCard: "",
      expirationDate: "",
      ccvCard: "",
    },
    currentUser: undefined,
    error: null,
    itemsCart: [],
    userSignIn: null,
  }),
  getters: {
    //Objectif: Retourner vrai si l'utilisateur est authentifié
    isAuthenticated(): boolean {
      return !!this.currentUser;
    },
  },
  actions: {
    //Objectif: Appeler le service de création d'utilisateur et mettre à jour le currentUser
    async createUser(data: UserFormInterface) {
      const itemsStore = useItems();
      try {
        this.currentUser = await createUser(data);
        this.error = null;
        let tempCart = itemsStore.getItemsCart;
        tempCart.forEach((element) => {
          this.currentUser?.cart?.push(element);
        });
        itemsStore.saveCart();
      } catch (error: any) {
        this.currentUser = undefined;
        this.error = error;
      }
    },
    //Objectif: Appeler le service de connexion d'utilisateur et mettre à jour le currentUser
    async signIn(data: SigninFormInterface) {
      try {
        this.currentUser = await signIn(data);
        this.error = null;
      } catch (error: any) {
        this.currentUser = undefined;
        this.error = error;
      }
      const itemsStore = useItems();
      if (this.isAuthenticated) {
        let tempCart = itemsStore.getItemsCart;
        tempCart.forEach((element) => {
          this.currentUser?.cart?.push(element);
        });
        itemsStore.fetchThenSaveCart(this.currentUser?.cart);
        itemsStore.saveCart();
      }
    },
    //Objectif: Appeler le service de récupération d'utilisateur et mettre à jour le currentUser
    async fetchCurrentUser() {
      const itemsStore = useItems();
      try {
        this.currentUser = await fetchCurrentUser();
        if (this.isAuthenticated) {
          await itemsStore.fetchThenSaveCart(this.currentUser.cart);
        }
        this.error = null;
      } catch (error: any) {
        this.currentUser = undefined;
        this.error = error;
      }
    },
    async saveDetails() {
      if (this.currentUser) {
        if (!this.currentUser.details) {
          this.currentUser.details = [];
        }
        this.currentUser.details.push(this.currentDetails!);
        await updateUserDetail(this.currentUser);
      }
    },
    async editDetails(id: number) {},
    //creer une fonction qui va executer fetch user car current user donne la carte a la creation du user, la carte est vide
    //Objectif: Appeler le service de déconexxion d'utilisateur et mettre à jour le currentUser
    async signOut() {
      const itemsStore = useItems();
      try {
        await signOut();
        this.currentUser = undefined;
        this.error = null;
        itemsStore.fetchThenSaveCart([]);
      } catch (error: any) {
        this.error = error;
      }
    },
  },
});
