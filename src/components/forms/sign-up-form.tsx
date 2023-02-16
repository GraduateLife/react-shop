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
import { createUser } from "../../firebase/authentication";
import { createUserDoc } from "../../firebase/firestore";

//FIXME - ugly
export default function SignUpForm() {
  const {
    handleSubmit: RHF_handler,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInformation>({ resolver: zodResolver(SignUpValidator) });
  const navigate = useNavigate();
  //ANCHOR react hook form submit handler must return promise to override isSubmitting
  const handleSubmit = async (formInputs: SignUpInformation) => {
    let { nickname, email, password } = formInputs;
    if (nickname.trim().length === 0) {
      nickname = Math.random().toString(36).slice(-8);
    }

    try {
      const firebaseResponse = await createUser(email, password);
      console.log(firebaseResponse);
      await createUserDoc(firebaseResponse, { displayName: nickname });
      navigate("/");
    } catch (e: any) {
      if (e.code === "auth/email-already-in-use") alert(e);
    }
  };

  return (
    <Flex w={"inherit"} direction={"column"} align={"center"}>
      <form style={{ width: "inherit" }} onSubmit={RHF_handler(handleSubmit)}>
        <FormControl>
          <FormLabel htmlFor="nickname">Nickname (Optional)</FormLabel>
          <Input
            id="nickname"
            placeholder="Your nickname"
            {...register("nickname")}
          />
          {errors.email ? (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          ) : (
            <FormHelperText>
              Tell us your nickname or we will automatically create one
            </FormHelperText>
          )}
        </FormControl>
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
              You will use this email address as your account
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
            <FormHelperText>
              8 to 16 characters, must contain one number, one uppercase letter
              and one special letter
            </FormHelperText>
          )}
        </FormControl>
        {/* //LINK confirm password */}
        <FormControl isRequired isInvalid={errors ? true : false}>
          <FormLabel htmlFor="confirm-password">
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
