import { Icon } from "@chakra-ui/react";
import React from "react";

import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { RiDeleteBin6Line, RiShoppingCartLine } from "react-icons/ri";
export function CartIcon() {
  return <Icon as={RiShoppingCartLine} boxSize={10} color={"brand.500"}></Icon>;
}

export function RemoveIcon(props: any) {
  return (
    <Icon as={RiDeleteBin6Line} boxSize={5} color={"gray.500"} {...props} />
  );
}

export function AmountUpIcon(props: any) {
  return <Icon as={VscChevronUp} boxSize={4} {...props} />;
}

export function AmountDownIcon(props: any) {
  return <Icon as={VscChevronDown} boxSize={4} {...props} />;
}
