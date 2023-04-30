import type { CartItemInterface } from "./Cart.interface";
import type {DetailsInterface} from "./Details.interface";

export interface UserInterface {
  _id?: string;
  name: string;
  email: string;
  password: string;
  details?: DetailsInterface[];
  cart?: CartItemInterface[];
  purchases?: [];
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserFormInterface = Partial<UserInterface>;

export interface SigninFormInterface {
  password: string;
  email: string;
}
