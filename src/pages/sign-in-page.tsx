import {
  Button,
  Heading,
  Flex,
  Text,
  GridItem,
  Center,
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import ResponsiveGrid from "../components/layout/responsive-grid";
import SignInForm from "../components/form/sign-in-form";

//FIXME - firebase communication

export default function SignInPage() {
  return (
    <ResponsiveGrid desktopCol={2} mobileCol={1} gap={40} mt={20}>
      <GridItem>
        <Heading>I have an account</Heading>
        <Flex h={96} w={"96"} direction={"column"} align="center">
          <SignInForm />

          <Center my={1.5}>
            <Text fontSize={"md"} color={"gray.500"}>
              or
            </Text>
          </Center>

          {/* LINK - provider options */}
          <Button size={"long"} colorScheme={"blue"} leftIcon={<FcGoogle />}>
            Sign in with Google
          </Button>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex h={96} justify={"center"} align={"center"}>
          <Flex
            direction={"column"}
            justify={"space-around"}
            alignItems={"center"}
            gap={4}
          >
            <Heading>I don't have an account</Heading>
            <Text fontSize={"2xl"}>
              Join our membership just by your Email!
            </Text>
            {/* LINK sign up btn */}
            <Link to="/sign-up">
              <Button size={"long"}>sign up</Button>
            </Link>
          </Flex>
        </Flex>
      </GridItem>
      {/* LINK new user section*/}
    </ResponsiveGrid>
  );
}
