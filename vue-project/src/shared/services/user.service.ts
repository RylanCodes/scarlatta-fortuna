import type { UserFormInterface, UserInterface } from "@/shared/interfaces";
import axios from "axios";

const BASE_URL = "/api/users";
const BASE_URL1 = "/api/users/profile";

//ATTENTION: Pas de Try/Catch ici car on veut le contrôle dans le signUp.vue
//Objectif: Communiquer avec le serveur et
//créer un utilisateur dans la base de données si
//l'adresse courriel n'est pas déjà utilisée
export async function createUser(
  partialUser: UserFormInterface
): Promise<UserInterface | null> {
  const response = await axios.post(BASE_URL, partialUser);
  if (!response.data.error) {
    return response.data;
  } else {
    throw new Error("Client error in createUser() : " + response.data.error);
  }
}

export async function updateUser(
  user: UserInterface
): Promise<UserInterface | null> {
  const response = await axios.patch(BASE_URL, user);
  if (!response.data.error) {
    return response.data;
  } else {
    throw new Error(
      "Client error in adding item to cart : " + response.data.error
    );
  }
}

export async function updateUserDetail(
  user: UserInterface
): Promise<UserInterface | null> {
  const response = await axios.patch(BASE_URL1, user);
  if (!response.data.error) {
    return response.data;
  } else {
    throw new Error(
      "Client error in adding item to cart : " + response.data.error
    );
  }
}
//Objectif: Communiquer avec le serveur et
//obtenir l'information de l'utilisateur connecté s'il y a lieu
export async function fetchCurrentUser(): Promise<UserInterface> {
  const response = await axios.get(BASE_URL);
  if (!response.data?.error) {
    console.log("Service: " + response.data);
    return response.data;
  } else {
    throw new Error(
      "Client error in fetchCurrentUser() : " + response.data.error
    );
  }
}
