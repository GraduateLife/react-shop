import { Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartIcon() {
  return (
    <Icon as={AiOutlineShoppingCart} boxSize={10} color={"brand.900"}></Icon>
  );
}
