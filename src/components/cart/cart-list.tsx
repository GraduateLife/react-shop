import { Box } from "@chakra-ui/react";
import { CartItem } from "../../models/cart-item.type";
import CartListItem from "./cart-list-item";

type ListProp = {
  cartList: CartItem[];
};

export default function CartList({ cartList }: ListProp) {
  if (cartList.length > 0) {
    return (
      <Box>
        {cartList.map(({ ProdId, ProdImageUrl, ProdName, quantity }) => {
          return (
            <CartListItem
              key={ProdId}
              imageUrl={ProdImageUrl}
              productName={ProdName}
              itemAmount={quantity}
            />
          );
        })}
      </Box>
    );
  }
  return <Box>cart is empty</Box>;
}
