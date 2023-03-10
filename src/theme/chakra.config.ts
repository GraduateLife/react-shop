import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {},
  },

  colors: {
    brand: "#DD6BFF",
    google: {
      100: "#4285F4",
      900: "#2B6CB0",
    },
    shadow: {
      light: "#EDF2F7",
      medium: "#718096",
      heavy: "#2D3748",
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
          borderRadius: "10px",
          width: 10,
          height: 10,
        },
        "invisible-active": {
          border: "none",
          borderRadius: "10px",
          width: 12,
          height: 12,
          _hover: {
            bg: "shadow.light",
          },
        },
      },
      defaultProps: {
        size: "md",
        variant: "solid",
        colorScheme: "purple",
      },
    },
    Icon: {
      baseStyle: {
        boxSize: "8",
      },
      defaultProps: {},
    },
    Input: {
      defaultProps: {
        variant: "flushed",
      },
    },
  },
});
