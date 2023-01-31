import type { formInputProps } from "./required-form-input";

export enum FORM_INPUT {
  EMAIL = "email",
  PWD = "password",
  PWD_CONFIRM = "password confirm",
}

type InputBuilder = Pick<
  formInputProps,
  "labelName" | "InputType" | "InputPlaceHolder" | "InputHelper"
>;

export const EmailLoginInput: InputBuilder = {
  labelName: "Your Email Address",
  InputType: "email",
  InputPlaceHolder: "",
  InputHelper: "",
};

export const PasswordLoginInput: InputBuilder = {
  labelName: "Your Password",
  InputType: "password",
  InputPlaceHolder: "",
  InputHelper: "",
};

export const EmailRegisterInput: InputBuilder = {
  labelName: "Your Email Address",
  InputType: "email",
  InputPlaceHolder: "e.g. yourname@example.com",
  InputHelper: "I'd like to use this email address as my account",
};

export const PasswordRegisterInput: InputBuilder = {
  labelName: "Your Password",
  InputType: "password",
  InputPlaceHolder: "We will never share your password with anyone",
  InputHelper: "your password should be at least 8 characters long",
};

export const PasswordConfirmRegisterInput: InputBuilder = {
  labelName: "Confirm Your Password",
  InputType: "password",
  InputPlaceHolder: "Please input your password again",
  InputHelper: "",
};
