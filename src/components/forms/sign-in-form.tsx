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
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInInformation, SignInValidator } from "./sign-in-form.validator";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  selectUserId,
  selectUserLogin,
  selectUserPassword,
  selectUserRequestStatus,
} from "../../store/user/user.selector";
import { ACTION_RESET_RQ, signInByEmail } from "../../store/user/user.slice";

export default function SignInForm() {
  const {
    handleSubmit: RHF_handler,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInInformation>({ resolver: zodResolver(SignInValidator) });
  const navigate = useNavigate();
  const appDispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch();
  const selectPassword = useSelector(selectUserPassword);
  const selectRequestState = useSelector(selectUserRequestStatus);
  const userId = useSelector(selectUserId);
  const isLogIn = useSelector(selectUserLogin);
  if (selectRequestState !== "idle") dispatch(ACTION_RESET_RQ);
  const handleSubmit = async (formInputs: SignInInformation) => {
    const { email, password: enteredPwd } = formInputs;
    appDispatch(signInByEmail(email)).then(() => {
      if (selectPassword) {
        if (selectPassword !== enteredPwd) alert("not right pwd");
        if (userId === "") alert("not reg");
        else navigate("/");
      }
    });
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
            <FormHelperText>Please enter your email address</FormHelperText>
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
            isLoading={selectRequestState !== "succeeded"}
            type={"submit"}
          >
            SIGN IN
          </Button>
        </Center>
      </form>
    </Flex>
  );
}
