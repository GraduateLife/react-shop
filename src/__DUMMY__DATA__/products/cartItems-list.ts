import redHat from "./hatImages/red-hat.png";
import greenHat from "./hatImages/green-hat.png";
import orangeHat from "./hatImages/orange-hat.png";
import yellowHat from "./hatImages/yellow-hat.png";
import redCoat from "./coatImages/red-coat.png";
import greenCoat from "./coatImages/green-coat.png";
import orangeCoat from "./coatImages/orange-coat.png";
import yellowCoat from "./coatImages/yellow-coat.png";
import { CartItem } from "../../models/cargo.type";

const allProducts: CartItem[] = [
  {
    ProdId: "qsq",
    ProdName: "red hat",
    ProdPrice: 99,
    ProdImageUrl: redHat,

    ItemQuantity: 9,
  },
  {
    ProdId: "axdasc",
    ProdName: "green hat",
    ProdPrice: 89,
    ProdImageUrl: greenHat,

    ItemQuantity: 9,
  },
  {
    ProdId: "fsn",
    ProdName: "orange hat",
    ProdPrice: 199,
    ProdImageUrl: orangeHat,

    ItemQuantity: 9,
  },
  {
    ProdId: "nui",
    ProdName: "yellow hat",
    ProdPrice: 899,
    ProdImageUrl: yellowHat,

    ItemQuantity: 9,
  },
  {
    ProdId: "ewrbw",
    ProdName: "red coat",
    ProdPrice: 9988,
    ProdImageUrl: redCoat,

    ItemQuantity: 9,
  },
  {
    ProdId: "houi",
    ProdName: "green coat",
    ProdPrice: 8999,
    ProdImageUrl: greenCoat,

    ItemQuantity: 9,
  },
  {
    ProdId: "tcrt",
    ProdName: "orange coat",
    ProdPrice: 19999,
    ProdImageUrl: orangeCoat,

    ItemQuantity: 9,
  },
  {
    ProdId: "bre",
    ProdName: "yellow coat",
    ProdPrice: 9000,
    ProdImageUrl: yellowCoat,

    ItemQuantity: 9,
  },
  {
    ProdId: "qsqc",
    ProdName: "red hat",
    ProdPrice: 99,
    ProdImageUrl: redHat,

    ItemQuantity: 9,
  },
  {
    ProdId: "qsqg",
    ProdName: "red hat",
    ProdPrice: 99,
    ProdImageUrl: redHat,

    ItemQuantity: 9,
  },
  {
    ProdId: "qsqt",
    ProdName: "red hat",
    ProdPrice: 99,
    ProdImageUrl: redHat,

    ItemQuantity: 9,
  },
  {
    ProdId: "qsql",
    ProdName: "red hatbuyimvvew",
    ProdPrice: 99,
    ProdImageUrl: redHat,

    ItemQuantity: 9,
  },
];

export const fetchAllCartItems = () => {
  return allProducts;
};
