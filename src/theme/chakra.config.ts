// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "none",
        width: "32",
      },

      sizes: {},

      variants: {},
      defaultProps: {
        size: "md",
        variant: "solid",
        colorScheme: "orange",
      },
    },
  },
});
