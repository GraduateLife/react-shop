import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectCartOverallPrice } from "../../store/cart/cart-list.selector";
import { ProceedIcon } from "./checkout-icons";

export default function CheckoutSummary() {
  const cartOverallPrice = useSelector(selectCartOverallPrice);
  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"space-between"}
      bg={"shadow.light"}
      h={80}
      p={4}
    >
      <Heading textTransform={"uppercase"}>Payment Summary</Heading>
      <Box w={"90%"}>
        <Text fontWeight={"700"}>
          You are about to pay: £ {cartOverallPrice}
        </Text>
      </Box>
      <Button size={"long"} leftIcon={<ProceedIcon />}>
        Pay by credit card
      </Button>
      <Box>
        <Text>We accept:</Text>
      </Box>
    </Flex>
  );
}
