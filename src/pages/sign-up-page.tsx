import { Box, Flex, Heading } from "@chakra-ui/react";

import SignUpForm from "../components/forms/sign-up-form";

export default function SignUpPage() {
  return (
    <Flex direction={"column"} align="center">
      <Heading my={5} textAlign={"center"}>
        Start your journey in Wild Heart!
      </Heading>

      <Box w={"100%"}>
        <SignUpForm />
      </Box>
    </Flex>
  );
}
