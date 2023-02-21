import { Button, ButtonGroup } from "@chakra-ui/react";

import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PROVIDERS } from "../../firebase/user/providers";

import { AppDispatch } from "../../store/store";
import {
  selectUserLogin,
  selectUserRequestStatus,
} from "../../store/user/user.selector";
import { signInByProvider } from "../../store/user/user.slice";
import { arrayFromStringEnum } from "../../utils/enum-to-array";
import ProviderIconsFactory from "./provider-icons";

export default function ProviderButtons() {
  const memoedProviders = useMemo(() => arrayFromStringEnum(PROVIDERS), []);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const userRequestStatus = useSelector(selectUserRequestStatus);
  const userIsLogin = useSelector(selectUserLogin);
  const handleGoogleBtnClick = async (providerName: string) => {
    if (userRequestStatus === "idle") {
      await dispatch(signInByProvider(providerName as PROVIDERS));
    }
    navigate("/");
  };
  return (
    <ButtonGroup size={"long"}>
      {memoedProviders.map((p) => (
        <Button
          key={p}
          onClick={() => handleGoogleBtnClick(p)}
          variant={p}
          leftIcon={ProviderIconsFactory(p as PROVIDERS)()}
        >
          join with {p}
        </Button>
      ))}
    </ButtonGroup>
  );
}
