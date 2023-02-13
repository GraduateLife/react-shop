import { Box, Heading } from "@chakra-ui/react";

import SignUpForm from "../components/forms/sign-up-form";

export default function SignUpPage() {
  return (
    <>
      <Box my={5}>
        <Heading textAlign={"center"}>
          Start your journey in Wild Heart!
        </Heading>
      </Box>
      <Box w={80}>
        <SignUpForm />
      </Box>
    </>
  );
}
