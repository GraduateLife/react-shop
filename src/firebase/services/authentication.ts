import {
  getAuth as fb_getAuth,
  signInWithPopup as fb_signInWithPopup,
  GoogleAuthProvider as fb_GoogleAuthProvider,
  createUserWithEmailAndPassword as fb_createUserWithEmailAndPassword,
} from "firebase/auth";

import { app } from "../initialization";

const GoogleProvider = new fb_GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

const authToken = fb_getAuth(app);
//TODO - might use factory to improve but not essential right now
export const signInWithGooglePopup = () =>
  fb_signInWithPopup(authToken, GoogleProvider);

/**
 *
 * @remark fails if account exists.
 */
export const signUpWithEmail = async (email: string, password: string) =>
  await fb_createUserWithEmailAndPassword(authToken, email, password);
