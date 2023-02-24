import { Box, Center } from "@chakra-ui/react";

import { CartItem } from "../../models/cargo.type";

import CartListItem from "./cart-list-item";
import { CART_BEHAVIORS } from "./component-behaviors";

type IProp = {
  cartList: CartItem[];
};

//STUB list need to know item number as well to remove item, hence cartListItem reducer is needed
export default function CartList({ cartList }: IProp) {
  if (cartList.length === 0) {
    return (
      <Center h={`${CART_BEHAVIORS.CART_EMPTY_HEIGHT}`} fontSize={"xl"}>
        Cart is currently empty
      </Center>
    );
  } else {
    return (
      <Box
        minH={`${CART_BEHAVIORS.CART_EMPTY_HEIGHT}`}
        maxH={74 * CART_BEHAVIORS.CART_ITEM_DISPLAY_UP_LIMIT}
      >
        {cartList.map((cartItem) => {
          return <CartListItem key={cartItem.ProdId} cartItem={cartItem} />;
        })}
      </Box>
    );
  }
}
