import { Button, Heading, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
function NoAccountPrompt() {
  return (
    <Flex
      h={96}
      px={6}
      justify={"center"}
      align={"center"}
      border={"8px"}
      borderColor={"brand"}
    >
      <Flex
        direction={"column"}
        justify={"space-around"}
        alignItems={"center"}
        gap={4}
      >
        <Heading>I don't have an account</Heading>
        <Text fontSize={"2xl"}>Join our membership just by your Email</Text>
        {/* LINK sign up btn */}
        <Link to="/sign-up">
          <Button size={"long"}>Join now</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
export default NoAccountPrompt;
