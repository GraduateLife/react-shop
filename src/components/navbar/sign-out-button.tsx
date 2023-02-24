import { IconButton, IconButtonProps } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { useToast } from "@chakra-ui/react";
import {
  selectUserData,
  selectUserRequestStatus,
} from "../../store/user/user.selector";
import { ACTION_USER_LOGIN_CHANGE, signOut } from "../../store/user/user.slice";
import { SignOutIcon } from "./navbar-icons";

function SignOutButton(props: Partial<IconButtonProps>) {
  const appDispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch();
  const currUser = useSelector(selectUserData);
  const navigate = useNavigate();
  const toast = useToast();
  const userRequestStatus = useSelector(selectUserRequestStatus);
  const handleSignOut = async () => {
    if (currUser.UserIsLoggedIn) {
      await appDispatch(signOut(currUser.UserEmail));
      if (userRequestStatus === "succeeded")
        dispatch(ACTION_USER_LOGIN_CHANGE(false));
      navigate("/");
      toast({
        position: "top",
        description: "You have successfully signed out.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <IconButton
      variant={"invisible-active"}
      aria-label="sign out"
      isDisabled={currUser.UserIsLoggedIn === false}
      icon={
        <SignOutIcon
          color={currUser.UserIsLoggedIn === true ? "red" : undefined}
        />
      }
      {...props}
      onClick={() => handleSignOut()}
    />
  );
}

export default SignOutButton;
