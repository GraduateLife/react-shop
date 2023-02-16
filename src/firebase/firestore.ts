import type { UserCredential } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc as getDocRef,
} from "firebase/firestore";

const db = getFirestore();

export const createUserDoc = async (
  providerResponse: UserCredential,
  otherInformation = {}
) => {
  const UserRef = getDocRef(db, "user", providerResponse.user.uid);
  const mightUserSnapshot = await getDoc(UserRef);
  //   console.log(mightUserSnapshot.exists());
  if (!mightUserSnapshot.exists()) {
    console.log("about to create");
    let { displayName, email } = providerResponse.user;
    const createAt = new Date();

    try {
      await setDoc(UserRef, {
        displayName,
        email,
        createAt,
        ...otherInformation,
      });
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
    }
  }
  console.log("created");
  return "ok";
};
