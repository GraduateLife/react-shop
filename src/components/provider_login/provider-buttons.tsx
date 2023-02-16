import { Button, ButtonGroup } from "@chakra-ui/react";

import React from "react";
import { signInWithGoogle } from "../../firebase/authentication";
import { createUserDoc } from "../../firebase/firestore";

import { GoogleIcon } from "./provider-icons";

export default function ProviderButtons() {
  const handleGoogleBtnClick = async () => {
    const res = await signInWithGoogle();
    await createUserDoc(res);
  };
  return (
    <ButtonGroup size={"long"}>
      <Button
        onClick={() => handleGoogleBtnClick()}
        variant={"google"}
        leftIcon={<GoogleIcon />}
      >
        Sign in with Google
      </Button>
    </ButtonGroup>
  );
}
