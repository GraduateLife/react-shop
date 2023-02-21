import { IconButton, IconButtonProps } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  selectUserLogin,
  selectUserRequestStatus,
} from "../../store/user/user.selector";
import { signOut } from "../../store/user/user.slice";
import { SignOutIcon } from "./navbar-icons";

function SignOutButton(props: Partial<IconButtonProps>) {
  const dispatch = useDispatch<AppDispatch>();
  const userIsLogin = useSelector(selectUserLogin);
  const userRequestStatus = useSelector(selectUserRequestStatus);
  const handleSignOut = async () => {
    if (userIsLogin) {
      await dispatch(signOut());
      if (userRequestStatus === "succeeded")
        alert("You have successfully signed out");
    }
  };

  return (
    <IconButton
      variant={"invisible-active"}
      aria-label="sign out"
      icon={<SignOutIcon color={userIsLogin ? "red" : "gray.400"} />}
      {...props}
      onClick={() => handleSignOut()}
    />
  );
}

export default SignOutButton;
