import { Button } from "@chakra-ui/react";
import LoadingSpinner from "components/layout/spinner";

import React from "react";

type ButtonProps = {
  style: ButtonShapes;
  children: React.ReactNode;
  isPending?: boolean;
};

type ButtonStyles = {
  height: string;
  width: string;
  borderRadius: string;
  colorScheme: string;
};

const buttonDefaultStyles: ButtonStyles = {
  height: "12",
  width: "36",
  borderRadius: "none",
  colorScheme: "orange",
};

export enum ButtonShapes {
  BUTTON_LINK = "button_link",
  BUTTON_DEFAULT = "button_default",
  BUTTON_ALPHA = "button_alpha",
}

function getCustomButtonStyle(styleName: ButtonShapes) {
  switch (styleName) {
    case ButtonShapes.BUTTON_LINK:
      return { variant: "outline" };
    case ButtonShapes.BUTTON_DEFAULT:
      return { variant: "solid" };
    case ButtonShapes.BUTTON_ALPHA:
      return { colorScheme: "whiteAlpha" };
    default:
      throw new Error("Unknown button");
  }
}

export default function ButtonFactory({
  style = ButtonShapes.BUTTON_DEFAULT,
  children,
  isPending = false,
  ...rest
}: ButtonProps & Partial<ButtonStyles>) {
  const s = getCustomButtonStyle(style);

  return (
    <Button {...buttonDefaultStyles} {...s} isLoading={isPending} {...rest}>
      {isPending ? <LoadingSpinner /> : children}
    </Button>
  );
}
