import { Button } from "@chakra-ui/react";
import React from "react";

import { GoogleIcon } from "./provider-icons";

export default function ProviderButtons() {
  return (
    <>
      <Button size={"long"} variant={"google"} leftIcon={<GoogleIcon />}>
        Sign in with Google
      </Button>
    </>
  );
}
