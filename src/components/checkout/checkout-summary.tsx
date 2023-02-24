import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectCartOverallPrice } from "../../store/cart/cart-list.selector";
import { ProceedIcon } from "./checkout-icons";
import PaymentForm from "./payment-form";

export default function CheckoutSummary() {
  const cartOverallPrice = useSelector(selectCartOverallPrice);
  return (
    <Flex bg={"shadow.light"} p={4} direction={"column"}>
      <Heading textTransform={"uppercase"}>Payment Summary</Heading>
      <Box w={"90%"} mt={"3"}>
        <Text fontWeight={"700"}>
          You are about to pay: £ {cartOverallPrice}
        </Text>
      </Box>
      <PaymentForm />
    </Flex>
  );
}
