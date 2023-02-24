import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  GridItem,
  Heading,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CheckoutList from "../components/checkout/checkout-list";
import CheckoutSummary from "../components/checkout/checkout-summary";
import ResponsiveGrid from "../components/layout/responsive-grid";
import {
  selectCartListData,
  selectCartOverallQuantity,
} from "../store/cart/cart-list.selector";

export default function CheckoutPage() {
  let cartList = useSelector(selectCartListData);
  const cartOverallQuantity = useSelector(selectCartOverallQuantity);

  return (
    <ResponsiveGrid desktopCol={12} mobileCol={1} mb={12}>
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
            <Link to={"/products"}>
              <Button>Continue shopping</Button>
            </Link>
          </ButtonGroup>
        </Flex>
      </GridItem>
      <GridItem colSpan={4} pt={20} pl={8}>
        <CheckoutSummary />
      </GridItem>
    </ResponsiveGrid>
  );
}
