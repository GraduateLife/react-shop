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
import { selectUserPassword } from "../../store/user/user.selector";
import { signInByEmail } from "../../store/user/user.slice";

export default function SignInForm() {
  const {
    handleSubmit: RHF_handler,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInInformation>({ resolver: zodResolver(SignInValidator) });
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const selectPassword = useSelector(selectUserPassword);

  const handleSubmit = async (formInputs: SignInInformation) => {
    const { email, password } = formInputs;
    await dispatch(signInByEmail(email));
    if (selectPassword === password) {
      navigate("/");
    } else alert("password error");
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
          <Button mt={8} size={"long"} isLoading={isSubmitting} type={"submit"}>
            SIGN IN
          </Button>
        </Center>
      </form>
    </Flex>
  );
}
