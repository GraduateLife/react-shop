import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";

export type formInputProps = {
  labelName: string;
  InputType: string;
  InputPlaceHolder: string;
  InputHelper: string;
};

export default function FormInput({
  labelName,
  InputType,
  InputPlaceHolder,
  InputHelper,
}: formInputProps) {
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); //TODO - throttle
  };

  const isEmpty = input === "";

  return (
    <FormControl isInvalid={isEmpty} isRequired>
      <FormLabel>{labelName}</FormLabel>
      <Input
        type={InputType}
        placeholder={InputPlaceHolder}
        value={input}
        onChange={handleInput}
      />
      {!isEmpty ? (
        <FormHelperText>{InputHelper}</FormHelperText>
      ) : (
        <FormErrorMessage>This field is required.</FormErrorMessage>
      )}
    </FormControl>
  );
}
