import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

export default function SuperBigSpinner() {
  return (
    <Flex justify={"center"} align={"center"} my={40}>
      <Spinner
        boxSize={96}
        emptyColor="shadow.light"
        color={"brand"}
        thickness="15px"
      />
    </Flex>
  );
}
