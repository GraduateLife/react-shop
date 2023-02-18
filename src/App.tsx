import { ChakraProvider } from "@chakra-ui/react";

import WebsitePages from "./router/routes";
import { theme } from "./theme/chakra.config";

//^TO USE chakra-ui PROPERLY, PLEASE USE TYPESCRIPT OF WORKSPACE VERSION:
//^ VScode? F1=>TypeScript:Select typeScript version=>Use Workspace Version

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WebsitePages />
    </ChakraProvider>
  );
}

export default App;
