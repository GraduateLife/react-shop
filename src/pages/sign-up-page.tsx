import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  EmailRegisterInput,
  FORM_INPUT,
  PasswordConfirmRegisterInput,
  PasswordRegisterInput,
} from "../components/form/form-input.builder";
import { checkUserValidity } from "../__DUMMY__DATA__/user/correct-user";
import SignUpForm from "../components/form/sign-up-form";

//FIXME - firebase communication
// FIXME - queries happen in page
//STUB - dummy async ready
export default function SignUpPage() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    setSignUpBtnLoading(true);
    alert("writing new user into firebase...");
    const v = checkUserValidity(
      { UserEmail: email, UserPassword: password },
      confirmedPassword
    );

    if (v) {
      setTimeout(() => navigate("/dashboard"), 400);
    } else {
      alert("error input");
      setSignUpBtnLoading(false);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [signUpBtnLoading, setSignUpBtnLoading] = useState(false);

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
      <Box my={5}>
        <Heading textAlign={"center"}>
          Start your journey in Wild Heart!
        </Heading>
      </Box>
      <Flex w={80} direction={"column"} align={"center"}>
        <SignUpForm />
      </Flex>
    </>
  );
}
