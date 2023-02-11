import { Link, Outlet } from "react-router-dom";
import { Text, Flex, HStack, Button } from "@chakra-ui/react";
import GlobalLayout from "../components/layout/global-layout";
import BrandLogo from "../theme/Logo";
import CartComponent from "../components/cart/cart.component";

//FIXME - logout button

export default function Navbar() {
  return (
    <GlobalLayout>
      <Flex
        w={"100%"}
        h={"28"}
        align={"center"}
        justify={"space-between"}
        px={"12"}
      >
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
        <HStack spacing={"10"}>
          {/* //LINK - link to all products page */}
          <Link to="/products">
            <Button>products</Button>
          </Link>
          {/* //LINK - link to sign in page */}
          <Link to="/sign-in">
            <Button>ACCOUNT</Button>
          </Link>
          {/* STUB cart component is here! */}
          <CartComponent />
        </HStack>
      </Flex>
      <Outlet />
    </GlobalLayout>
  );
}
