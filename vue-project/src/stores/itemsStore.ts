import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ItemInterface } from "@/shared/interfaces/Item.interface";
import type { CartItemInterface } from "@/shared/interfaces/Cart.interface";
import { updateUser } from "@/shared/services";
import { useUser } from "./userStore";
import items from "../shared/data/apparel.json";

export interface ItemsState {
  items: ItemInterface[];
  tempsItemsArray: ItemInterface[];
  itemsCart: CartItemInterface[];
  searchItems: ItemInterface[];
  itemPerPage: number;
  currentPage: number;
  minPrice: number;
  maxPrice: number;
  review: number;
  filterOpen: boolean;
  filterSubCategoryIsUsed: boolean;
  searchOpen: boolean;
  sortOrder: boolean;
  filterItem: string;
  filterSubcategory: string;
  filterColor: string;
  isMiniCartOpen: boolean;
}

export const useItems = defineStore("items", {
  state: (): ItemsState => ({
    items: items,
    tempsItemsArray: [],
    itemsCart: [],
    itemPerPage: 10,
    currentPage: 1,
    minPrice: 0,
    maxPrice: 400,
    review: 0,
    searchItems: [],
    filterOpen: false,
    filterSubCategoryIsUsed: false,
    searchOpen: false,
    sortOrder: false,
    filterItem: "",
    filterSubcategory: "",
    filterColor: "",
    isMiniCartOpen: false,
  }),
  getters: {
    getItems(state: ItemsState) {
      return state.items;
    },
    getItemsCart(state: ItemsState) {
      return state.itemsCart;
    },
    getCartTotals(state: ItemsState) {
      let shipping = ref(15);
      let subTotal = computed({
        get() {
          let price = 0;
          for (let index = 0; index < state.itemsCart.length; index++) {
            const element = state.itemsCart[index];
            price += Number(element.item.raw_price) * element.quantity;
          }
          if (price >= 200) {
            shipping.value = 0;
          } else {
            shipping.value = 15;
          }
          return price;
        },
        set() {
          return 0;
        },
      });
      const gst = computed(() => Number(subTotal.value * 0.05));
      const qst = computed(() => Number(subTotal.value * 0.09975));
      const total = computed(
        () =>
          subTotal.value +
          Number(gst.value) +
          Number(qst.value) +
          shipping.value
      );
      return {
        subTotal: +subTotal.value,
        shipping: +shipping.value,
        gst: +gst.value,
        qst: +qst.value,
        total: +total.value,
      };
    },
    getItemPerPage(state: ItemsState) {
      return state.itemPerPage;
    },
    getCurrentPage(state: ItemsState) {
      return state.currentPage;
    },
    getCurrentMinPrice(state: ItemsState) {
      return state.minPrice;
    },
    getCurrentMaxPrice(state: ItemsState) {
      return state.maxPrice;
    },
    getCurrentReview(state: ItemsState) {
      return state.review;
    },
    getSearchItem(state: ItemsState) {
      return state.searchItems;
    },
    getFilterOpen(state: ItemsState) {
      return state.filterOpen;
    },
    getFilterSubCategoryIsUsed(state: ItemsState) {
      return state.filterSubCategoryIsUsed;
    },
    getSortOrder(state: ItemsState) {
      return state.sortOrder;
    },
    getsearchOpen(state: ItemsState) {
      return state.searchOpen;
    },
    getItemsTempArray(state: ItemsState) {
      let tempArray: ItemInterface[] = [];
      let offset = (state.currentPage - 1) * state.itemPerPage;

      if (this.filterSubCategoryIsUsed == true) {
        for (let index = 0; index < state.itemPerPage; index++) {
          const element = this.searchItems[index + offset];
          if (element == null) {
            break;
          }
          tempArray.push(element);
        }
        return tempArray;
      } else if (this.searchItems.length > 0) {
        for (let index = 0; index < state.itemPerPage; index++) {
          const element = this.searchItems[index + offset];
          if (element == null) {
            break;
          }
          tempArray.push(element);
        }
        return tempArray;
      } else {
        for (let index = 0; index < state.itemPerPage; index++) {
          const element = state.items[index + offset];
          if (element == null) {
            break;
          }
          tempArray.push(element);
        }
        return tempArray;
      }
    },
  },
  actions: {
    addItemToCart(item?: ItemInterface | null | undefined) {
      if (item) {
        let exist: boolean = false;
        let saveIndex: number = 0;
        const itemCart: CartItemInterface = {
          item: item,
          quantity: 1,
        };
        for (let index = 0; index < this.itemsCart.length; index++) {
          if (this.itemsCart[index].item.id == itemCart.item.id) {
            exist = true;
            saveIndex = index;
          }
        }
        if (exist === true) {
          this.itemsCart[saveIndex].quantity++;
        } else {
          this.itemsCart.push(itemCart);
        }

        this.isMiniCartOpen = true;

        const userStore = useUser();
        if (userStore.isAuthenticated) {
          this.saveCart();
        }
      }
    },
    /*
      addItemToCart(item?: ItemInterface) {
      let exist: boolean = false;
      let saveIndex: number = 0;
      const itemCart: CartItemInterface = {
        item: item,
        quantity: 1,
      };
      for (let index = 0; index < this.itemsCart.length; index++) {
        if (this.itemsCart[index].item.id == itemCart.item.id) {
          exist = true;
          saveIndex = index;
        }
      }
      if (exist === true) {
        this.itemsCart[saveIndex].quantity++;
      } else {
        this.itemsCart.push(itemCart);
      }

      this.isMiniCartOpen = true;

      const userStore = useUser();
      if (userStore.isAuthenticated) {
        this.saveCart();
      }
    }, */
    async saveCart() {
      const userStore = useUser();
      let user = userStore.currentUser;
      if (userStore.isAuthenticated && user) {
        user.cart = this.getItemsCart;
        await updateUser(user);
      }
    },
    async fetchThenSaveCart(cart: any) {
      this.itemsCart = cart;
    },
    filterTransition() {
      if (this.filterOpen == true) {
        this.filterOpen = false;
      } else {
        this.filterOpen = true;
      }
    },
    quantityModification(cartItem: CartItemInterface) {
      for (let index = 0; index < this.itemsCart.length; index++) {
        if (this.itemsCart[index].item.id == cartItem.item.id)
          this.itemsCart[index].quantity = cartItem.quantity;
      }
      const userStore = useUser();
      if (userStore.isAuthenticated) {
        this.saveCart();
      }
    },
    removeLine(cartItem: CartItemInterface) {
      for (let index = 0; index < this.itemsCart.length; index++) {
        if (this.itemsCart[index].item.id == cartItem.item.id)
          this.itemsCart.splice(index, 1);
      }
      const userStore = useUser();
      if (userStore.isAuthenticated) {
        this.saveCart();
      }
    },
    displayedItems(displayedItems: number) {
      this.itemPerPage = displayedItems;
      this.currentPage = 1;
    },
    lastPage(): number {
      let lastPage = this.items.length / this.itemPerPage;

      if (this.searchItems.length > 0) {
        lastPage = this.searchItems.length / this.itemPerPage;
      }
      return lastPage;
    },
    reviewFiltrer(): number {
      let maxLike = 0;
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        if (Number(element.likes_count) > maxLike) {
          maxLike = Number(element.likes_count);
        }
      }
      return maxLike;
    },
    reviewStarSwitcher(number: number) {
      let tempNumberArray: Number[] = [];
      if (number >= 1) {
        let tempNumberArray: Number[] = [];
        let star: number = Number(this.reviewFiltrer()) / 5;
        let reviewstar = number;
        let min = Math.round(Number(star * reviewstar - star));
        let max = Math.ceil(Number(star * reviewstar));
        tempNumberArray.push(min);
        tempNumberArray.push(max);
        return tempNumberArray;
      } else {
        tempNumberArray.push(0);
        tempNumberArray.push(this.reviewFiltrer());
        return tempNumberArray;
      }
    },
    filteredSubcategory() {
      let result: ItemInterface[] = [];
      let likedArray = this.reviewStarSwitcher(this.review);
      this.filterSubCategoryIsUsed = true;
      if (!this.filterSubcategory) {
        result = this.getItems.filter(
          (item) =>
            Number(item.raw_price) >= this.minPrice &&
            Number(item.raw_price) <= this.maxPrice
        );
        result = result.filter(
          (item) =>
            Number(item.likes_count) >= likedArray[0].valueOf() &&
            Number(item.likes_count) <= likedArray[1].valueOf()
        );
      } else {
        result = this.getItems.filter(
          (item) => item.subcategory === this.filterSubcategory
        );
        result = result.filter(
          (item) =>
            Number(item.raw_price) >= this.minPrice &&
            Number(item.raw_price) <= this.maxPrice
        );
        result = result.filter(
          (item) =>
            Number(item.likes_count) >= likedArray[0].valueOf() &&
            Number(item.likes_count) <= likedArray[1].valueOf()
        );
      }
      this.searchItems = result;
    },
    priceSorted() {
      if (this.filterSubCategoryIsUsed == true) {
        if (this.sortOrder == false) {
          this.searchItems.sort(function (a, b) {
            return (
              parseFloat(a.raw_price ?? "0") - parseFloat(b.raw_price ?? "0")
            );
          });
          this.sortOrder = true;
        } else {
          this.searchItems.sort(function (a, b) {
            return (
              parseFloat(b.raw_price ?? "0") - parseFloat(a.raw_price ?? "0")
            );
          });
          this.sortOrder = false;
        }
      } else {
        if (this.sortOrder == false) {
          this.items.sort(function (a, b) {
            return (
              parseFloat(a.raw_price ?? "0") - parseFloat(b.raw_price ?? "0")
            );
          });
          this.sortOrder = true;
        } else {
          this.items.sort(function (a, b) {
            return (
              parseFloat(b.raw_price ?? "0") - parseFloat(a.raw_price ?? "0")
            );
          });
          this.sortOrder = false;
        }
      }
    },
    likeSorted() {
      if (this.filterSubCategoryIsUsed == true) {
        if (this.sortOrder == false) {
          this.searchItems.sort(function (a, b) {
            return (
              parseFloat(a.likes_count ?? "0") -
              parseFloat(b.likes_count ?? "0")
            );
          });
          this.sortOrder = true;
        } else {
          this.searchItems.sort(function (a, b) {
            return (
              parseFloat(b.likes_count ?? "0") -
              parseFloat(a.likes_count ?? "0")
            );
          });
          this.sortOrder = false;
        }
      } else {
        if (this.sortOrder == false) {
          this.items.sort(function (a, b) {
            return (
              parseFloat(a.likes_count ?? "0") -
              parseFloat(b.likes_count ?? "0")
            );
          });
          this.sortOrder = true;
        } else {
          this.items.sort(function (a, b) {
            return (
              parseFloat(b.likes_count ?? "0") -
              parseFloat(a.likes_count ?? "0")
            );
          });
          this.sortOrder = false;
        }
      }
    },

    searchInput() {
      if (this.searchOpen == false) {
        this.searchOpen = true;
      } else {
        this.searchOpen = false;
      }
    },
    searchBar(searching: string) {
      this.searchItems = [];
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];

        Object.values(element).forEach((field) => {
          if (field.toLowerCase().includes(searching.toLowerCase())) {
            if (!this.searchItems.includes(element)) {
              this.searchItems.push(element);
            }
          }
        });
      }
    },
    getOneItem(model: string) {
      const result = this.getItems.find((item) => item.model === model);
      return result;
    },
    applyPromotion(model: string) {
      const result = this.getItems.find((item) => item.model === model);
      if (result) {
        let newPrice = (Number(result.raw_price) * 1.5).toFixed(2);
        result.raw_price = String(newPrice);
      }
      return result;
    },
    removePromotion(model: string) {
      const result = this.getItems.find((item) => item.model === model);
      if (result) {
        let newPrice = Number(result.raw_price) * 0.67;
        result.raw_price = String(newPrice);
      }
      return result;
    },
  },
});
