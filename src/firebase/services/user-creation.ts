import type { UserCredential } from "firebase/auth";
import { getDoc, setDoc, doc as getDocRef } from "firebase/firestore";
import { assertFireBaseError } from "../../utils/error-assertion";
import { db } from "../initialization";
import {
  UserInformation,
  userInformationFallback,
  UserSchema,
} from "../schema";
import { signInWithGooglePopup } from "./authentication";

/**
 *this function will create a new user document in firestore if he/she doesn't exist before
 * @param providerResponse raw response form firebase linked provider
 * @param otherUserInformation other information to be injected to make every user document identical
 * @returns promise of string 'ok' means write doc success,
 * or promise of firebase error code message means write doc fail on firebase side
 * @remarks users created from auth do not have passwords
 */
export const createUserDocFromAuth = async (
  providerResponse: UserCredential
): Promise<string> => {
  const userRef = getDocRef(db, "users", providerResponse.user.uid);
  const mightUserSnapshot = await getDoc(userRef);

  if (!mightUserSnapshot.exists()) {
    let { displayName, email, uid } = providerResponse.user;

    try {
      await setDoc(userRef, {
        uid,
        displayName,
        email,
        cartList: [],
        createAt: new Date(),
        isLoggedIn: false,
      });
      return "ok";
    } catch (err) {
      if (assertFireBaseError(err)) {
        return err.code;
      }
    }
  }
  throw new Error("Hey!Hey! User document already exists!");
};

export const signInWithGoogle = async () => {
  const res = await signInWithGooglePopup();
  await createUserDocFromAuth(res);
};
