import { Spinner } from "@chakra-ui/react";
import React from "react";
import { ThemeColors } from "theme/colors";

export default function LoadingSpinner() {
  return (
    <Spinner
      size="md"
      emptyColor="gray.200"
      color={ThemeColors.THEME_DEFAULT}
    />
  );
}
