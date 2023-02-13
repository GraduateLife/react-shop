import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

export default function SuperBigSpinner() {
  return (
    <Flex justify={"center"} align={"center"} my={40}>
      <Spinner
        boxSize={96}
        emptyColor="shadow.shallow"
        color={"brand.500"}
        thickness="15px"
      />
    </Flex>
  );
}
