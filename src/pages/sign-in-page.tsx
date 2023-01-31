import { Box, Button, VStack, Heading, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import RequiredInput from "../components/form.component/required-form-input";
import {
  EmailLoginInput,
  FORM_INPUT,
  PasswordLoginInput,
} from "../components/form.component/form-input.builder";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { isCorrectUser } from "../__DUMMY__DATA__/user/correct-user";

//FIXME - firebase communication

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // FIXME - queries happen in page
  const handleSignIn = () => {
    alert("communicate with firebase for auth...");
    if (isCorrectUser({ UserEmail: email, UserPassword: password })) {
      navigate("/");
    } else {
      alert("input error");
    }
  };
  const handleInput =
    (src: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      switch (src) {
        case FORM_INPUT.EMAIL:
          setEmail(e.target.value);
          break;
        case FORM_INPUT.PWD:
          setPassword(e.target.value);
          break;

        default:
          throw new Error("not handled case");
      }
    };

  return (
    <Flex justify={"space-between"} alignItems={"center"}>
      <VStack align="stretch" w={"96"} my={"10"} mr={40}>
        <Heading>I have an account</Heading>
        {/* LINK //Email */}
        <Box h={"100"}>
          <RequiredInput
            {...EmailLoginInput}
            onChange={handleInput(FORM_INPUT.EMAIL)}
          />
        </Box>
        {/* LINK password */}
        <Box h={"100"} mb={"10"}>
          <RequiredInput
            {...PasswordLoginInput}
            onChange={handleInput(FORM_INPUT.PWD)}
          />
        </Box>
        <Flex
          justify={"space-between"}
          direction={"column"}
          alignItems={"center"}
          gap={"3"}
        >
          {/*LINK sign in btn */}
          <Button
            size={"long"}
            onClick={() => {
              handleSignIn();
            }}
          >
            SIGN IN
          </Button>
          <Text fontSize={"md"} color={"gray.500"}>
            or
          </Text>
          {/* //LINK - provider options */}
          <Button size={"long"} variant={"google"} leftIcon={<FcGoogle />}>
            Sign in with Google
          </Button>
        </Flex>
      </VStack>
      <Flex
        direction={"column"}
        justify={"space-around"}
        alignItems={"center"}
        gap={4}
      >
        <Heading>I don't have an account</Heading>
        <Text fontSize={"2xl"}>Join our membership just by your Email!</Text>

        <Link to="/sign-up">
          <Button size={"long"}>sign up</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
