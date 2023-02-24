import { app } from "../initialization";
import { createProviderInstance, PROVIDERS } from "./providers";
import {
  getAuth as fb_getAuth,
  signInWithPopup as fb_signInWithPopup,
  createUserWithEmailAndPassword as fb_createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  writeUserFromMembership,
  writeUserFromProvider,
} from "./read-and-write";
import { UserWebsite } from "../../models/user.types";
import { ERR_MSGS } from "../../utils/error-assertion";

export const authToken = fb_getAuth(app);

export const createPopup = (name: PROVIDERS) =>
  fb_signInWithPopup(authToken, createProviderInstance(name));

export const startSignInWithProvider = async (name: PROVIDERS) => {
  const popup = await createPopup(name);
  return await writeUserFromProvider(popup);
};

/**
 *
 * @param preparedUser
 * @returns userId! instead of 'ok'
 */
export const startSignUpWithEmail = async (preparedUser: UserWebsite) => {
  const { UserEmail, UserPassword, UserId } = preparedUser;
  if (UserPassword) {
    await fb_createUserWithEmailAndPassword(
      authToken,
      UserEmail.toLowerCase(),
      UserPassword
    );
    const dbRes = await writeUserFromMembership(preparedUser);
    if (dbRes === "ok") return UserId;
  }
  throw new Error(ERR_MSGS.UNEXPECTED_CASE);
};
