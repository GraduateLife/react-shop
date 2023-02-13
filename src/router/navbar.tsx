import { Link, Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

import BrandDisplay from "../components/navbar/brand-display";
import NavbarButtons from "../components/navbar/navbar-buttons";

//FIXME - logout button

export default function Navbar() {
  return (
    <Flex direction={"column"} align={"center"}>
      <Flex
        w={"100vw"}
        h={"20"}
        align={"center"}
        justify={"space-between"}
        px={"12"}
      >
        <Link to="/">
          <BrandDisplay />
        </Link>
        <NavbarButtons />
      </Flex>
      <Flex w={"90vw"} direction={"column"} align={"center"}>
        <Outlet />
      </Flex>
    </Flex>
  );
}
