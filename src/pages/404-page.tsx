import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      justify={"center"}
      align={"center"}
      direction={"column"}
    >
      <Heading my={44}>This is not the page you are looking for!</Heading>
      <Link to={"/"}>back to home page</Link>
    </Flex>
  );
}
