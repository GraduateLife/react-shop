import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { CardElement } from "@stripe/react-stripe-js";

import React from "react";
import { ProceedIcon } from "./checkout-icons";

export default function PaymentForm() {
  return (
    <Flex w={"100%"} direction={"column"} justify={"center"} align={"center"}>
      <form style={{ width: "inherit" }}>
        <Box my={"12"}>
          <CardElement />
        </Box>

        <Center>
          <Button size={"long"} leftIcon={<ProceedIcon />}>
            Pay by credit card
          </Button>
        </Center>
      </form>
    </Flex>
  );
}
