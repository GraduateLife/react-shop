import { Button, ButtonGroup, useToast } from "@chakra-ui/react";

import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PROVIDERS } from "../../firebase/user/providers";

import { AppDispatch } from "../../store/store";
import { selectUserRequestStatus } from "../../store/user/user.selector";
import { ACTION_RESET_RQ, signInByProvider } from "../../store/user/user.slice";
import { arrayFromStringEnum } from "../../utils/data-transform";
import ProviderIconsFactory from "./provider-icons";

import { UserWebsite } from "../../models/user.types";

export default function ProviderButtons() {
  const memoedProviders = useMemo(() => arrayFromStringEnum(PROVIDERS), []);
  const appDispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const userRequestStatus = useSelector(selectUserRequestStatus);

  const handleGoogleBtnClick = async (providerName: string) => {
    if (userRequestStatus !== "idle") dispatch(ACTION_RESET_RQ());
    const res = await appDispatch(signInByProvider(providerName as PROVIDERS));
    if (userRequestStatus === "succeeded") {
      toast({
        position: "top",
        description: `Welcome back! ${
          (res.payload as UserWebsite).UserDisplayName
        }`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      navigate("/");
    }
  };
  return (
    <ButtonGroup size={"long"}>
      {memoedProviders.map((p) => (
        <Button
          key={p}
          onClick={() => handleGoogleBtnClick(p)}
          isLoading={userRequestStatus === "loading"}
          variant={p}
          leftIcon={ProviderIconsFactory(p as PROVIDERS)()}
        >
          join with {p}
        </Button>
      ))}
    </ButtonGroup>
  );
}
