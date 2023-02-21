import { FcGoogle } from "react-icons/fc";

import { Icon } from "@chakra-ui/react";
import { PROVIDERS } from "../../firebase/user/providers";
import { ERR_MSGS } from "../../utils/error-assertion";

function GoogleIcon() {
  return <Icon as={FcGoogle}></Icon>;
}

export default function ProviderIconsFactory(providerName: PROVIDERS) {
  switch (providerName) {
    case PROVIDERS.GOOGLE:
      return GoogleIcon;

    default:
      throw new Error(ERR_MSGS.NOT_SUPPORTED_PROVIDER);
  }
}
