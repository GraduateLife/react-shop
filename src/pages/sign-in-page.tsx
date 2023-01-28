import { Box, Button, VStack } from "@chakra-ui/react";
import React from "react";
import FormInput from "../components/form.component/form-input";
import {
  EmailInput,
  PasswordInput,
} from "../components/form.component/form-input.builder";

export default function SignInPage() {
  return (
    <>
      <VStack align="stretch" w={"96"} my={"10"}>
        <Box h={"100"}>
          <FormInput {...EmailInput} />
        </Box>
        <Box h={"100"}>
          <FormInput {...PasswordInput} />
        </Box>
      </VStack>
      <Button>Sign in</Button>
    </>
  );
}
