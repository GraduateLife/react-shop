import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RequiredInput from "../components/form.component/required-form-input";
import {
  EmailRegisterInput,
  FORM_INPUT,
  PasswordConfirmRegisterInput,
  PasswordRegisterInput,
} from "../components/form.component/form-input.builder";
import { checkUserValidity } from "../__DUMMY__DATA__/user/correct-user";

//FIXME - firebase communication
// FIXME - queries happen in page
export default function SignUpPage() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    alert("writing new user into firebase...");
    const v = checkUserValidity(
      { UserEmail: email, UserPassword: password },
      confirmedPassword
    );

    if (v) {
      navigate("/");
    } else {
      alert("error input");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleInput =
    (src: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const entered = e.target.value;
      switch (src) {
        case FORM_INPUT.EMAIL:
          setEmail(entered);

          break;
        case FORM_INPUT.PWD:
          setPassword(entered);

          break;
        case FORM_INPUT.PWD_CONFIRM:
          setConfirmedPassword(entered);

          break;

        default:
          throw new Error("not handled case");
      }
    };

  return (
    <>
      <Box my={"10"}></Box>
      <Heading textAlign={"center"}>Start your journey in Wild Heart</Heading>
      <VStack align="stretch" w={"96"} my={"10"}>
        <Box h={"100"}>
          <RequiredInput
            {...EmailRegisterInput}
            onChange={handleInput(FORM_INPUT.EMAIL)}
          />
        </Box>
        {/* LINK password */}
        <Box h={"100"} mb={"10"}>
          <RequiredInput
            {...PasswordRegisterInput}
            onChange={handleInput(FORM_INPUT.PWD)}
          />
        </Box>
        {/* LINK password confirm*/}
        <Box h={"100"} mb={"10"}>
          <RequiredInput
            {...PasswordConfirmRegisterInput}
            onChange={handleInput(FORM_INPUT.PWD_CONFIRM)}
          />
        </Box>
        <Flex h={"100"} justify="center">
          <Button size={"long"} onClick={() => handleSignUp()}>
            go
          </Button>
        </Flex>
      </VStack>
    </>
  );
}
