import { CartItem } from "../../models/cargo.type";
import { Product } from "../../models/cargo.type";

export const addOneItem = (
  sourceCartList: CartItem[],
  targetItem: Product | CartItem // should be able to add items from both shop page and cart component
): CartItem[] => {
  //new item to add or update existing amount
  const attemptFindTargetItem = sourceCartList.find(
    (cartItem) => cartItem.ProdId === targetItem.ProdId
  );
  //update amount since target item is already in cart list
  if (attemptFindTargetItem) {
    return sourceCartList.map((cartItem) => {
      return cartItem.ProdId === attemptFindTargetItem.ProdId
        ? { ...cartItem, ItemQuantity: cartItem.ItemQuantity + 1 }
        : cartItem;
    });
  }
  //couldn't find target item in the list hence create new cart item to append
  const { ProdId, ProdName, ProdPrice, ProdImageUrl } = targetItem;
  const newCartItem: CartItem = {
    ProdId: ProdId,
    ProdName: ProdName,
    ProdPrice: ProdPrice,
    ProdImageUrl: ProdImageUrl,
    ItemQuantity: 1,
  };
  //new item
  return [...sourceCartList, { ...newCartItem }];
};

export const reduceOneItem = (
  sourceCartList: CartItem[],
  targetItem: CartItem
): CartItem[] => {
  //itemToReduce must exists in cartList since we reduce it in cart list
  const attemptFindItem = sourceCartList.find(
    (item) => item.ProdId === targetItem.ProdId
  ) as CartItem;

  if (attemptFindItem.ItemQuantity === 1) {
    return sourceCartList.filter(
      (item) => item.ProdId !== attemptFindItem.ProdId
    );
  }

  return sourceCartList.map((item) => {
    return item.ProdId === attemptFindItem.ProdId
      ? { ...item, ItemQuantity: item.ItemQuantity - 1 }
      : item;
  });
};

export const removeOneItem = (
  sourceCartList: CartItem[],
  targetItem: CartItem
) => {
  return sourceCartList.filter((item) => item.ProdId !== targetItem.ProdId);
};
