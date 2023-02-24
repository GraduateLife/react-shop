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
import { SignUpInformation, SignUpValidator } from "./sign-up-form.validator";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { prepareMembershipUserDataWithFallback } from "../../firebase/user/prepare-user";
import { AppDispatch } from "../../store/store";
import { signUpByEmail } from "../../store/user/user.slice";

export default function SignUpForm() {
  const {
    handleSubmit: RHF_handler,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInformation>({ resolver: zodResolver(SignUpValidator) });
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToast();

  const handleSubmit = async (formInputs: SignUpInformation) => {
    let { displayName, email, password } = formInputs;
    if (displayName.trim().length === 0) {
      displayName = Math.random().toString(36).slice(-8);
    }
    const preparedUser = prepareMembershipUserDataWithFallback(
      email,
      password,
      displayName
    );
    await dispatch(signUpByEmail(preparedUser));
    toast({
      position: "top",
      description:
        "Congratulations! You have successfully created a new account!",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Flex w={"inherit"} direction={"column"} align={"center"}>
      <form style={{ width: "inherit" }} onSubmit={RHF_handler(handleSubmit)}>
        <FormControl>
          <FormLabel htmlFor="nickname">Nickname (Optional)</FormLabel>
          <Input
            id="nickname"
            placeholder="Tell us how we should call you"
            {...register("displayName")}
          />
          {errors.email ? (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          ) : (
            <FormHelperText>Or we will automatically create one</FormHelperText>
          )}
        </FormControl>
        {/* //LINK - email address */}
        <FormControl isRequired isInvalid={errors ? true : false}>
          <FormLabel htmlFor="email" textTransform={"capitalize"}>
            Email Address
          </FormLabel>
          <Input
            id="email"
            placeholder="Your email address"
            {...register("email")}
          />
          {errors.email ? (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          ) : (
            <FormHelperText>
              Your email address is assumed to be the unique account
            </FormHelperText>
          )}
        </FormControl>
        {/* //LINK password */}
        <FormControl isRequired isInvalid={errors ? true : false}>
          <FormLabel htmlFor="password" textTransform={"capitalize"}>
            Password
          </FormLabel>
          <Input
            id="password"
            placeholder="Your password"
            type={"password"}
            {...register("password")}
          />
          {errors.password ? (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          ) : (
            <FormHelperText>
              8 to 16 characters, must contain one number, one uppercase letter
              and one special letter
            </FormHelperText>
          )}
        </FormControl>
        {/* //LINK confirm password */}
        <FormControl isRequired isInvalid={errors ? true : false}>
          <FormLabel htmlFor="confirm-password" textTransform={"capitalize"}>
            Confirm your password
          </FormLabel>
          <Input
            id="confirm-password"
            placeholder="Please enter your password again"
            type={"password"}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword ? (
            <FormErrorMessage>
              {errors.confirmPassword.message}
            </FormErrorMessage>
          ) : (
            <FormHelperText>
              You need to enter the password again
            </FormHelperText>
          )}
        </FormControl>
        {/* //LINK - submit btn */}
        <Center>
          <Button mt={4} isLoading={isSubmitting} type="submit">
            register
          </Button>
        </Center>
      </form>
    </Flex>
  );
}
