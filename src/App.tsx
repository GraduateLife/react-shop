import { ChakraProvider } from "@chakra-ui/react";
import Pages from "./router/routes";
import { theme } from "./theme/chakra.config";
//^TO USE chakra-ui PROPERLY, PLEASE USE TYPESCRIPT OF WORKSPACE VERSION:
//^ VScode? F1=>TypeScript:Select typeScript version=>Use Workspace Version

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Pages></Pages>
    </ChakraProvider>
  );
}

export default App;
