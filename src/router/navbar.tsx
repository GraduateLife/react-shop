import { Link, Outlet } from "react-router-dom";
import LOGO from "../asset/logo.svg";
import { Text, Flex, HStack, Image, Spacer, Button } from "@chakra-ui/react";
import GlobalLayout from "../components/layout/global-layout";

export default function Navbar() {
  return (
    <>
      <Flex h={"28"} px={"20"} align={"center"} mb={"20"}>
        <Link to="/">
          <HStack>
            {/* //LINK - logo */}
            <Image src={LOGO} alt="react-shop-logo" boxSize="16" />
            {/* //LINK - brand name */}
            <Text
              pl={"4"}
              fontFamily="Tangerine"
              fontSize={"56"}
              color="gray.600"
            >
              Wild Heart
            </Text>
          </HStack>
        </Link>

        <Spacer />
        <HStack spacing={"10"}>
          {/* //LINK - link to all products page */}
          <Link to="/products">
            <Button>ALL PRODUCTS</Button>
          </Link>
          {/* //LINK - link to sign in page */}
          <Link to="/sign-in">
            <Button>ACCOUNT</Button>
          </Link>
        </HStack>
      </Flex>
      <GlobalLayout>
        <Outlet></Outlet>
      </GlobalLayout>
    </>
  );
}
