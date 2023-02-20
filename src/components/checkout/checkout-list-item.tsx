import { Flex, IconButton, Image, Box, Text, Center } from "@chakra-ui/react";

import React from "react";
import { CartItem } from "../../models/cargo.type";
import { useDispatch } from "react-redux";
import {
  ACTION_MINUS,
  ACTION_PLUS,
  ACTION_REMOVE,
} from "../../store/cart/cart-list.slice";

import {
  CheckoutDeleteIcon,
  CheckoutLikeIcon,
  CheckoutMinusIcon,
  CheckoutPlusIcon,
} from "./checkout-icons";

type IProp = {
  cartItem: CartItem;
};

export default function CheckoutListItem({ cartItem }: IProp) {
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
    <Flex justify={"space-around"} align={"center"} my={"2"} p={2}>
      <IconButton
        flex={1}
        variant="invisible"
        aria-label="Remove item"
        icon={<CheckoutDeleteIcon />}
        onClick={() => handleRemoveItemBtnClick()}
      />

      <Image boxSize={120} src={ProdImageUrl} alt={ProdName} minW={120} />

      <Box pl={4} flex={4}>
        <Flex direction={"column"}>
          <Text fontSize={"2xl"} noOfLines={1} fontWeight={700}>
            {ProdName}
          </Text>

          <Text fontSize={"lg"} noOfLines={1} fontWeight={600}>
            £ {ProdPrice}
          </Text>
        </Flex>
      </Box>
      <Flex align={"center"} justify={"center"} flex={3}>
        <IconButton
          variant="invisible"
          aria-label="Amount down"
          icon={<CheckoutMinusIcon />}
          onClick={() => handleAmountDownBtnClick()}
        />
        <Center width={"10"}>
          <Text fontSize={"2xl"}>{ItemQuantity}</Text>
        </Center>

        <IconButton
          variant="invisible"
          aria-label="Amount up"
          icon={<CheckoutPlusIcon />}
          onClick={() => handleAmountUpBtnClick()}
        />
      </Flex>
      <IconButton
        flex={1}
        variant="invisible"
        aria-label="Save to wish list"
        icon={<CheckoutLikeIcon />}
        onClick={() => {
          console.log("ck");
        }}
      />
    </Flex>
  );
}
