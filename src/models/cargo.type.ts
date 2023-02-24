export type CartItem = {
  ItemQuantity: number;
} & Cargo;

export type Product = {
  ProdDescription: string;
  ProdBelongsTo: string;
} & Cargo;

type Cargo = {
  ProdId: string;
  ProdName: string;
  ProdPrice: number;
  ProdImageUrl: string;
};
