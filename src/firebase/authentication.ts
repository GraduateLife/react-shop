import {
  getAuth as fb_getAuth,
  signInWithPopup as fb_signInWithPopup,
  GoogleAuthProvider as fb_GoogleAuthProvider,
  createUserWithEmailAndPassword as fb_createUserWithEmailAndPassword,
} from "firebase/auth";

import { app } from "./initialize";

const GoogleProvider = new fb_GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

const authToken = fb_getAuth(app);
export const signInWithGoogle = () =>
  fb_signInWithPopup(authToken, GoogleProvider);

export const createUser = async (email: string, password: string) =>
  await fb_createUserWithEmailAndPassword(authToken, email, password);
