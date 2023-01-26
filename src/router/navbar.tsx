import { Link, Outlet } from "react-router-dom";
import LOGO from "../asset/logo.svg";
import { Text, Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import GlobalLayout from "../components/layout/global-layout";

import ButtonFactory from "components/buttons.component/button-factory";
import { ButtonShapes } from "components/buttons.component/button-factory";

export default function Navbar() {
  return (
    <>
      <Flex h={"28"} px={"20"} align={"center"} mb={"20"}>
        <Link to="/">
          <HStack>
            <Image src={LOGO} alt="react-shop-logo" boxSize="16" />
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
          <Link to="/shop">
            <ButtonFactory style={ButtonShapes.BUTTON_LINK}>
              ALL PRODUCTS
            </ButtonFactory>
          </Link>

          <Link to="/sign-in">
            <ButtonFactory style={ButtonShapes.BUTTON_LINK}>
              SIGN IN
            </ButtonFactory>
          </Link>
        </HStack>
      </Flex>
      <GlobalLayout>
        <Outlet></Outlet>
      </GlobalLayout>
    </>
  );
}
