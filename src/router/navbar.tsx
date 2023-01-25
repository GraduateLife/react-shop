import { Link, Outlet } from "react-router-dom";
import LOGO from "../asset/logo192.png";
import { Center, Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import GlobalLayout from "../components/layout/global-layout";

export default function Navbar() {
  return (
    <>
      <Flex h={"28"} px={"20"}>
        <Center>
          <Link to="/">
            <Image src={LOGO} alt="react-shop-logo" boxSize="16" />
          </Link>
        </Center>
        <Spacer />
        <HStack spacing={"24"}>
          <Center>
            <Link to="/shop">SHOP</Link>
          </Center>
          <Center _hover={{ bg: "gray.400" }}>
            <Link to="/account">SIGN IN</Link>
          </Center>
        </HStack>
      </Flex>
      <GlobalLayout>
        <Outlet></Outlet>
      </GlobalLayout>
    </>
  );
}
