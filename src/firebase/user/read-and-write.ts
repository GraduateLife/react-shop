import { UserCredential } from "firebase/auth";

import { UserWebsite } from "../../models/user.types";
import { ERR_MSGS } from "../../utils/error-assertion";

import { isThisDocumentWritten, readCollection, writeOne } from "../db-rw";
import { authToken } from "./user-operations";

export const writeUserFromProvider = async (
  providerResponse: UserCredential
) => {
  const { displayName, email, uid } = providerResponse.user;
  const docIsWritten = await isThisDocumentWritten("users", uid);

  if (!docIsWritten) {
    const isInformationReady = displayName && email && uid;
    if (isInformationReady) {
      await writeOne<UserWebsite>("users", uid, {
        UserId: uid,
        UserDisplayName: displayName,
        UserEmail: email,
        UserPassword: null,
        UserIsLoggedIn: true,
      });
      return await writeOne("carts", uid, { items: [] });
    }
  }
  return "write will not be executed";
};

export const writeUserFromMembership = async (preparedUser: UserWebsite) => {
  const { UserId } = preparedUser;
  const docIsWritten = await isThisDocumentWritten("users", UserId);
  if (!docIsWritten) {
    await writeOne<UserWebsite>("users", UserId, {
      ...preparedUser,
    });
    return await writeOne("carts", UserId, { items: [] });
  }
  return "write will not be executed";
};

export const findUserById = async (targetId: string) => {
  const dbRes = await readCollection<UserWebsite>("users");
  const targetUser = dbRes.find((item) => item.UserEmail === targetId);
  if (!targetUser) {
    throw new Error("couldn't find this user by id");
  }
  return targetUser;
};

export const findUserByEmail = async (targetEmail: string) => {
  const dbRes = await readCollection<UserWebsite>("users");
  const targetUser = dbRes.find(
    (item) => item.UserEmail === targetEmail.toLowerCase()
  );
  if (!targetUser) {
    throw new Error("couldn't find this user by email");
  }
  return targetUser;
};

export const findUserFromProvider = (): UserWebsite => {
  const user = authToken.currentUser;

  if (user !== null) {
    const { displayName, email, uid } = user.providerData[0];
    if (displayName && email && uid) {
      return {
        UserId: uid,
        UserDisplayName: displayName,
        UserEmail: email.toLowerCase(),
        UserPassword: null,
        UserIsLoggedIn: true,
      };
    }
  }
  throw new Error("couldn't find this user by provider");
};
