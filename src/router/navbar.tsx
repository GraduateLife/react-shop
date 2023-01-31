import { Link, Outlet } from "react-router-dom";
import { Text, Flex, HStack, Spacer, Button } from "@chakra-ui/react";
import GlobalLayout from "../components/layout/global-layout";
import BrandLogo from "../theme/Logo";
import CartComponent from "../components/cart/cart.component";

export default function Navbar() {
  return (
    <>
      <Flex h={"28"} px={"20"} align={"center"}>
        <Link to="/">
          <HStack>
            {/* //LINK - logo */}
            <BrandLogo boxSize={16} color={"brand.900"} />
            {/* //LINK - brand name */}
            <Text
              pl={"4"}
              fontFamily="Tangerine"
              fontSize={"56"}
              color="gray.800"
            >
              Wild Heart
            </Text>
          </HStack>
        </Link>

        <Spacer />

        <HStack spacing={"10"}>
          {/* //LINK - link to all products page */}
          <Link to="/products">
            <Button>shop</Button>
          </Link>
          {/* //LINK - link to sign in page */}
          <Link to="/sign-in">
            <Button>ACCOUNT</Button>
          </Link>
          <CartComponent></CartComponent>
        </HStack>
      </Flex>
      <GlobalLayout>
        <Outlet></Outlet>
      </GlobalLayout>
    </>
  );
}
