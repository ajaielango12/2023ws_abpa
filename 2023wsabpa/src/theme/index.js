import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html body": {
        fontSize: "20px",
      },
      a: { textDecoration: "none", _hover: { color: "cyan.800" } },
    },
  },
});

export default theme;
