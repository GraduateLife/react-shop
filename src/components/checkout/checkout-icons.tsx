import { Icon, IconProps } from "@chakra-ui/react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { RiHeart3Line, RiVisaLine } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export function CheckoutPlusIcon(props: Partial<IconProps>) {
  return <Icon as={HiPlus} color={"shadow.heavy"} {...props} />;
}

export function CheckoutMinusIcon(props: Partial<IconProps>) {
  return <Icon as={HiMinus} color={"shadow.heavy"} {...props} />;
}

export function CheckoutLikeIcon(props: Partial<IconProps>) {
  return <Icon as={RiHeart3Line} color={"shadow.heavy"} {...props} />;
}

export function CheckoutDeleteIcon(props: Partial<IconProps>) {
  return <Icon as={RxCross1} boxSize={8} color={"shadow.heavy"} {...props} />;
}

export function VisaIcon(props: Partial<IconProps>) {
  return (
    <Icon as={RiVisaLine} boxSize={10} color={"shadow.heavy"} {...props} />
  );
}

export function ProceedIcon(props: Partial<IconProps>) {
  return <Icon as={IoBagCheckOutline} color={"white"} {...props} />;
}
