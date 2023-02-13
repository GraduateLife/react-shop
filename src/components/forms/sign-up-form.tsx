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
import { SignUpInformation, SignUpValidator } from "./sign-up-form.validator";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const {
    handleSubmit: RHF_handler,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInformation>({ resolver: zodResolver(SignUpValidator) });
  const navigate = useNavigate();
  //ANCHOR react hook form submit handler must return promise to override isSubmitting
  const handleSubmit = (formInputs: SignUpInformation) => {
    console.log(formInputs);

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(JSON.stringify(formInputs));
        resolve(formInputs);
        navigate("/");
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
            <FormHelperText>
              You will use this email address as account
            </FormHelperText>
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
            <FormHelperText>Please keep it in mind</FormHelperText>
          )}
        </FormControl>
        {/* //LINK confirm password */}
        <FormControl isRequired isInvalid={errors ? true : false}>
          <FormLabel htmlFor="confirm-password">
            Confirm your password
          </FormLabel>
          <Input
            id="confirm-password"
            placeholder="Confirm your password"
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
          <Button
            mt={4}
            colorScheme="orange"
            isLoading={isSubmitting}
            type="submit"
          >
            register
          </Button>
        </Center>
      </form>
    </Flex>
  );
}
