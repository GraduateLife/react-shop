import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {},
  },

  colors: {
    brand: {
      100: "#FEEBC8",
      900: "#DD6B20",
    },
    google: {
      100: "#4285F4",
      900: "#2B6CB0",
    },
  },
  components: {
    Button: {
      baseStyle: {
        textTransform: "uppercase",
        borderRadius: "none",
        width: "32",
      },

      sizes: {
        long: {
          width: 56,
          height: 10,
        },
      },

      variants: {
        google: {
          color: "white",
          bg: "google.100",
          _hover: {
            bg: "google.900",
            _disabled: {
              bg: "google.900",
            },
          },
        },
        invisible: {
          border: "none",
          width: 10,
          height: 10,
        },
      },
      defaultProps: {
        size: "md",
        variant: "solid",
        colorScheme: "orange",
      },
    },
  },
});
