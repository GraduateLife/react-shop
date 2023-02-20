import { Link, Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import BrandDisplay from "./brand-display";
import NavbarButtons from "./navbar-buttons";

//FIXME - logout button

export default function Navbar() {
  return (
    <Flex direction={"column"} align={"center"}>
      <Flex
        w={"100%"}
        h={"16vh"}
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
