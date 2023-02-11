import { Flex, IconButton, Image, Box, Text } from "@chakra-ui/react";

import React from "react";
import { CartItem } from "../../models/cart-item.type";
import { useDispatch } from "react-redux";
import {
  ACTION_MINUS,
  ACTION_PLUS,
  ACTION_REMOVE,
} from "../../store/cart/cart-list.slice";
import { AmountDownIcon, AmountUpIcon, RemoveIcon } from "./cart-icon";

type IProp = {
  cartItem: CartItem;
};

function CartListItem({ cartItem }: IProp) {
  const { ProdName, ProdImageUrl, ItemQuantity, ProdPrice } = cartItem;
  const dispatch = useDispatch();
  const handleRemoveItemBtnClick = () => {
    dispatch(ACTION_REMOVE(cartItem));
  };

  const handleAmountDownBtnClick = () => {
    dispatch(ACTION_MINUS(cartItem));
  };
  const handleAmountUpBtnClick = () => {
    console.log("item rendered", cartItem.ProdName);
    dispatch(ACTION_PLUS(cartItem));
  };

  return (
    <Flex justify={"space-around"} align={"center"} my={"1"}>
      <IconButton
        variant="invisible"
        aria-label="Remove item"
        icon={<RemoveIcon boxSize={5} />}
        onClick={() => handleRemoveItemBtnClick()}
      />

      <Image boxSize={70} src={ProdImageUrl} alt={ProdName} />
      <Box flex={1} width={30}>
        <Flex pl={4} direction={"column"}>
          <Text fontSize={"xl"} noOfLines={1} flex={7} fontWeight={600}>
            {ProdName}
          </Text>
          <Text fontSize={"md"} noOfLines={1} flex={3}>
            £ {ProdPrice}
          </Text>
        </Flex>
      </Box>
      <Flex direction={"column"} align={"center"}>
        <IconButton
          boxSize={4}
          variant="invisible"
          aria-label="Amount up"
          icon={<AmountUpIcon />}
          onClick={() => handleAmountUpBtnClick()}
        />
        <Text fontSize={"md"}>{ItemQuantity}</Text>
        <IconButton
          boxSize={4}
          variant="invisible"
          aria-label="Amount down"
          icon={<AmountDownIcon />}
          onClick={() => handleAmountDownBtnClick()}
        />
      </Flex>
    </Flex>
  );
}

export default React.memo(CartListItem);
