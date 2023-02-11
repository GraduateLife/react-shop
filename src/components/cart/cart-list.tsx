import { Box, Center } from "@chakra-ui/react";

import { CartItem } from "../../models/cart-item.type";

import CartListItem from "./cart-list-item";
import { CartParams } from "./component-parameters";

type IProp = {
  cartList: CartItem[];
};

//STUB list need to know item number as well to remove item, hence cartListItem reducer is needed
export default function CartList({ cartList }: IProp) {
  if (cartList.length === 0) {
    return (
      <Center h={`${CartParams.CART_EMPTY_SIZE}`} fontSize={"xl"}>
        Cart is currently empty
      </Center>
    );
  }

  return (
    <Box>
      {cartList.map((cartItem) => {
        return <CartListItem key={cartItem.ProdId} cartItem={cartItem} />;
      })}
    </Box>
  );
}
