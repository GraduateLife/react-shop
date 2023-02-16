import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import CheckoutList from "../components/checkout/checkout-list";
import CheckoutSummary from "../components/checkout/checkout-summary";
import ResponsiveGrid from "../components/layout/responsive-grid";
import {
  selectCartList,
  selectCartOverallQuantity,
} from "../store/cart/cart-list.selector";

export default function CheckoutPage() {
  let cartList = useSelector(selectCartList);
  const cartOverallQuantity = useSelector(selectCartOverallQuantity);

  return (
    <ResponsiveGrid desktopCol={12} mobileCol={1} gap={10}>
      <GridItem colSpan={8}>
        {/* //TODO hard coded px, responsive needed */}
        <Flex direction={"column"} align={"center"} w={"800px"}>
          <Box my={12} w={"inherit"}>
            <Heading>
              Your cart contains {cartOverallQuantity}{" "}
              {cartOverallQuantity <= 1 ? " item" : " items"}
            </Heading>
          </Box>
          <Center
            width={"inherit"}
            py={6}
            borderY={"8px"}
            borderColor={"brand"}
          >
            <CheckoutList cartList={cartList} />
          </Center>
          <ButtonGroup size={"long"} mt={4}>
            <Button>Display more</Button>
            <Text as={Box} px={4}>
              or
            </Text>
            <Button>Continue shopping</Button>
          </ButtonGroup>
        </Flex>
      </GridItem>
      <GridItem colSpan={4} pt={20}>
        <CheckoutSummary />
      </GridItem>
    </ResponsiveGrid>
  );
}
