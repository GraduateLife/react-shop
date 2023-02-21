import { FirebaseError } from "firebase/app";

export const assertJSError = (
  anythingMightBeError: unknown
): anythingMightBeError is Error =>
  anythingMightBeError instanceof Error ? true : false;

export const assertFireBaseError = (
  anythingMightBeError: unknown
): anythingMightBeError is FirebaseError =>
  anythingMightBeError instanceof FirebaseError ? true : false;

export enum ERR_MSGS {
  DUPLICATE_DOCUMENTS = "Hey!Hey! this document already exists!",
  NOT_EXISTED_DOCUMENT = "Be careful! the document you are looking for is not in the database!",
  UNEXPECTED_CASE = "Umm,something happened and we don't know the reason neither:(",
  NOT_SUPPORTED_PROVIDER = "Yak,this provider has not available in this website yet!",
}
