import { FirebaseError } from "firebase/app";

export type AsyncState = {
  requestStatus: "idle" | "loading" | "succeeded" | "failed";
  requestError: null | FirebaseError;
};
