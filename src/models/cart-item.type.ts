import { Product } from "./product.type";

export type CartItem = Omit<
  Product & { ItemQuantity: number },
  "ProdBelongsToCategory"
>;
