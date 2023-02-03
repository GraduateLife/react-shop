import { nanoid } from "@reduxjs/toolkit";

import redHat from "./hatImages/red-hat.png";
import greenHat from "./hatImages/green-hat.png";
import orangeHat from "./hatImages/orange-hat.png";
import yellowHat from "./hatImages/yellow-hat.png";
import redCoat from "./coatImages/red-coat.png";
import greenCoat from "./coatImages/green-coat.png";
import orangeCoat from "./coatImages/orange-coat.png";
import yellowCoat from "./coatImages/yellow-coat.png";
import { CartItem } from "../../models/cart-item.type";

const allProducts: CartItem[] = [
  {
    ProdId: nanoid(),
    ProdName: "red hat",
    ProdPrice: 99,
    ProdImageUrl: redHat,
    BelongsToCategory: "hat",
    quantity: 9,
  },
  {
    ProdId: nanoid(),
    ProdName: "green hat",
    ProdPrice: 89,
    ProdImageUrl: greenHat,
    BelongsToCategory: "hat",
    quantity: 9,
  },
  {
    ProdId: nanoid(),
    ProdName: "orange hat",
    ProdPrice: 199,
    ProdImageUrl: orangeHat,
    BelongsToCategory: "hat",
    quantity: 9,
  },
  {
    ProdId: nanoid(),
    ProdName: "yellow hat",
    ProdPrice: 899,
    ProdImageUrl: yellowHat,
    BelongsToCategory: "hat",
    quantity: 9,
  },
  {
    ProdId: nanoid(),
    ProdName: "red coat",
    ProdPrice: 9988,
    ProdImageUrl: redCoat,
    BelongsToCategory: "coat",
    quantity: 9,
  },
  {
    ProdId: nanoid(),
    ProdName: "green coat",
    ProdPrice: 8999,
    ProdImageUrl: greenCoat,
    BelongsToCategory: "coat",
    quantity: 9,
  },
  {
    ProdId: nanoid(),
    ProdName: "orange coat",
    ProdPrice: 19999,
    ProdImageUrl: orangeCoat,
    BelongsToCategory: "coat",
    quantity: 9,
  },
  {
    ProdId: nanoid(),
    ProdName: "yellow coat",
    ProdPrice: 9000,
    ProdImageUrl: yellowCoat,
    BelongsToCategory: "coat",
    quantity: 9,
  },
];

export const fetchAllProducts = () => {
  return allProducts;
};
export const fetchProductsByCategory = (categoryName: string) => {
  return allProducts.filter((item) => item.BelongsToCategory === categoryName);
};
