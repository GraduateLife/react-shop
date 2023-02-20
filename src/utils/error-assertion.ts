import { FirebaseError } from "firebase/app";

export const assertJSError = (
  anythingMightBeError: unknown
): anythingMightBeError is Error =>
  anythingMightBeError instanceof Error ? true : false;

export const assertFireBaseError = (
  anythingMightBeError: unknown
): anythingMightBeError is FirebaseError =>
  anythingMightBeError instanceof FirebaseError ? true : false;
