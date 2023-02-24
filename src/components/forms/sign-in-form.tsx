import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  FormHelperText,
  Flex,
  Center,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInInformation, SignInValidator } from "./sign-in-form.validator";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { selectUserRequestStatus } from "../../store/user/user.selector";
import {
  ACTION_RESET_RQ,
  ACTION_USER_LOGIN_CHANGE,
  signInByEmail,
} from "../../store/user/user.slice";

import { updateField } from "../../firebase/db-rw";
import { UserWebsite } from "../../models/user.types";

export default function SignInForm() {
  const {
    handleSubmit: RHF_handler,
    register,
    formState: { errors },
  } = useForm<SignInInformation>({ resolver: zodResolver(SignInValidator) });
  const navigate = useNavigate();
  const appDispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch();
  const toast = useToast();
  const selectRequestState = useSelector(selectUserRequestStatus);
  //STUB final resort

  // const isLogIn = useSelector(selectUserLogin);

  const handleSubmit = async (formInputs: SignInInformation) => {
    if (selectRequestState !== "idle") dispatch(ACTION_RESET_RQ());
    const { email, password: enteredPwd } = formInputs;
    const res = await appDispatch(signInByEmail(email));

    if (typeof (res.payload as UserWebsite).UserPassword === "object") {
      toast({
        position: "top",
        description:
          "You created your account via our providers, please try again with provider login",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    } else if (
      typeof (res.payload as UserWebsite).UserPassword === "string" &&
      (res.payload as UserWebsite).UserPassword!.length >= 8 &&
      (res.payload as UserWebsite).UserPassword !== enteredPwd
    )
      // alert("not right pwd");
      toast({
        position: "top",
        description: "Your password is incorrect",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    else {
      dispatch(ACTION_USER_LOGIN_CHANGE(true));
      await updateField("users", (res.payload as UserWebsite).UserId, {
        UserIsLoggedIn: true,
      });
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
    <Flex w={"inherit"} direction={"column"} align={"center"}>
      <form style={{ width: "inherit" }} onSubmit={RHF_handler(handleSubmit)}>
        {/* //LINK - email address */}
        <FormControl isRequired isInvalid={errors ? true : false}>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            id="email"
            placeholder="Your email address"
            {...register("email")}
          />
          {errors.email ? (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          ) : (
            <FormHelperText>Tell us your email address</FormHelperText>
          )}
        </FormControl>
        {/* //LINK password */}
        <FormControl isRequired isInvalid={errors ? true : false}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            placeholder="Your password"
            type={"password"}
            {...register("password")}
          />
          {errors.password ? (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          ) : (
            <FormHelperText>And your password as well</FormHelperText>
          )}
        </FormControl>

        {/* //LINK - submit btn */}
        <Center>
          <Button
            mt={8}
            size={"long"}
            isLoading={selectRequestState === "loading"}
            type={"submit"}
          >
            SIGN IN
          </Button>
        </Center>
      </form>
    </Flex>
  );
}
