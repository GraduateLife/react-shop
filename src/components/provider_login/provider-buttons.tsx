import { Button, ButtonGroup } from "@chakra-ui/react";

import React from "react";
import { PROVIDERS } from "../../firebase/user/providers";
import { startSignInWithProvider } from "../../firebase/user/sign-in-or-sign-up";
import { GoogleIcon } from "./provider-icons";

export default function ProviderButtons() {
  const handleGoogleBtnClick = async () => {
    await startSignInWithProvider(PROVIDERS.GOOGLE);
  };
  return (
    <ButtonGroup size={"long"}>
      <Button
        onClick={() => handleGoogleBtnClick()}
        variant={PROVIDERS.GOOGLE}
        leftIcon={<GoogleIcon />}
      >
        Sign in with Google
      </Button>
    </ButtonGroup>
  );
}
