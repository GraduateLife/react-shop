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
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInInformation, SignInValidator } from "./sign-in-form.validator";
import { useNavigate } from "react-router-dom";
import { isCorrectUser } from "../../__DUMMY__DATA__/user/correct-user";

export default function SignInForm() {
  const {
    handleSubmit: RHF_handler,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInInformation>({ resolver: zodResolver(SignInValidator) });
  const navigate = useNavigate();
  //ANCHOR react hook form submit handler must return promise to override isSubmitting
  const handleSubmit = (formInputs: SignInInformation) => {
    console.log(formInputs);

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(JSON.stringify(formInputs));
        if (isCorrectUser(formInputs)) {
          navigate("/");
        } else {
          alert("not the right person");
        }
        resolve(null);
      }, 1000);
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
            colorScheme="orange"
            isLoading={isSubmitting}
            type="submit"
          >
            SIGN IN
          </Button>
        </Center>
      </form>
    </Flex>
  );
}
