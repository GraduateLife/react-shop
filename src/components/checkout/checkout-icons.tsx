import { Icon } from "@chakra-ui/react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { RiHeart3Line, RiVisaLine } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export function CheckoutPlusIcon(props: any) {
  return <Icon as={HiPlus} color={"shadow.heavy"} {...props} />;
}

export function CheckoutMinusIcon(props: any) {
  return <Icon as={HiMinus} color={"shadow.heavy"} {...props} />;
}

export function CheckoutLikeIcon(props: any) {
  return <Icon as={RiHeart3Line} color={"shadow.heavy"} {...props} />;
}

export function CheckoutDeleteIcon(props: any) {
  return <Icon as={RxCross1} boxSize={8} color={"shadow.heavy"} {...props} />;
}

export function VisaIcon(props: any) {
  return (
    <Icon as={RiVisaLine} boxSize={10} color={"shadow.heavy"} {...props} />
  );
}

export function ProceedIcon(props: any) {
  return <Icon as={IoBagCheckOutline} color={"white"} {...props} />;
}
