import { GoogleAuthProvider as fb_GoogleAuthProvider } from "firebase/auth";

//LINK - implementation of separate providers
const manufactureGoogleProvider = () => {
  const GoogleProvider = new fb_GoogleAuthProvider();
  GoogleProvider.setCustomParameters({
    prompt: "select_account",
  });
  return GoogleProvider;
};

//LINK provider factory
export enum PROVIDERS {
  GOOGLE = "google",
}

export const createProviderInstance = (providerName: PROVIDERS) => {
  switch (providerName) {
    case PROVIDERS.GOOGLE:
      return manufactureGoogleProvider();

    default:
      throw new Error("not supported provider: " + providerName);
  }
};
