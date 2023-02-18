import { Box, Center, Heading, Text } from "@chakra-ui/react";

import { CartItem } from "../../models/cargo.type";
import CheckoutListItem from "./checkout-list-item";
import { CHECKLIST_BEHAVIORS } from "./component-behavior";

type IProp = {
  cartList: CartItem[];
};

export default function CheckoutList({ cartList }: IProp) {
  const displayHeightShouldBe =
    37 * CHECKLIST_BEHAVIORS.CHECKLIST_ITEM_DISPLAY_UP_LIMIT * 4;
  if (cartList.length === 0) {
    return (
      <Center h={displayHeightShouldBe} w={"95%"}>
        <Heading>Oops,you haven't selected anything 😥</Heading>
      </Center>
    );
  }
  return (
    <Box w={"95%"} minH={displayHeightShouldBe}>
      {cartList.map((cartItem) => {
        return <CheckoutListItem key={cartItem.ProdId} cartItem={cartItem} />;
      })}
    </Box>
  );
}
