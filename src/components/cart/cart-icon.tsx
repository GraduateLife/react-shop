import { Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
export function CartIcon() {
  return (
    <Icon as={AiOutlineShoppingCart} boxSize={10} color={"brand.900"}></Icon>
  );
}

export function RemoveIcon(props: any) {
  return <Icon as={RiDeleteBin6Line} {...props} />;
}

export function AmountUpIcon(props: any) {
  return <Icon as={VscChevronUp} {...props} />;
}

export function AmountDownIcon(props: any) {
  return <Icon as={VscChevronDown} {...props} />;
}
