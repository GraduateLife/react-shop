import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { RiDeleteBin6Line, RiShoppingCartLine } from "react-icons/ri";
export function CartIcon() {
  return <Icon as={RiShoppingCartLine} boxSize={10} color={"brand"}></Icon>;
}

export function RemoveIcon(props: Partial<IconProps>) {
  return (
    <Icon
      as={RiDeleteBin6Line}
      boxSize={5}
      color={"shadow.medium"}
      {...props}
    />
  );
}

export function AmountUpIcon(props: Partial<IconProps>) {
  return <Icon as={VscChevronUp} boxSize={4} {...props} />;
}

export function AmountDownIcon(props: Partial<IconProps>) {
  return <Icon as={VscChevronDown} boxSize={4} {...props} />;
}
