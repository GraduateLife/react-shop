import { UserCredential } from "firebase/auth";
import { CartItem } from "../../models/cargo.type";
import { UserWebsite } from "../../models/user.types";
import { writeCartList } from "../cartItems/read-and-write";
import { readCollection, readOneDocument, writeOne } from "../write-and-read";

export const writeUserFromProvider = async (
  providerResponse: UserCredential
) => {
  const { displayName, email, uid } = providerResponse.user;
  let readDocRes;
  try {
    await readOneDocument<UserWebsite>("users", uid);
  } catch (err) {
    readDocRes = null;
  }

  if (!readDocRes) {
    const isInformationReady = displayName && email && uid;
    if (isInformationReady) {
      await writeOne<UserWebsite>("users", uid, {
        UserId: uid,
        UserDisplayName: displayName,
        UserEmail: email,
        UserPassword: null,
        UserIsLoggedIn: true,
      });
      await writeOne("carts", uid, { items: [] });
      return "ok";
    }
  }
  throw new Error("Hey!Hey! User document already exists!");
};

export const writeUserFromMembership = async (preparedUser: UserWebsite) => {
  const { UserId } = preparedUser;
  let readDocRes;
  try {
    await readOneDocument<UserWebsite>("users", UserId);
  } catch (err) {
    readDocRes = null;
  }
  if (!readDocRes) {
    await writeOne<UserWebsite>("users", UserId, {
      ...preparedUser,
    });
    await writeOne("carts", UserId, { items: [] });
    return "ok";
  }
  throw new Error("Hey!Hey! User document already exists!");
};

export const findUserById = async (targetId: string) => {
  const dbRes = await readCollection<UserWebsite>("users");
  const targetUser = dbRes.find((item) => item.UserEmail === targetId);
  if (!targetUser) {
    throw new Error("couldn't find this user by email");
  }
  return targetUser;
};

export const findUserByEmail = async (targetEmail: string) => {
  const dbRes = await readCollection<UserWebsite>("users");
  const targetUser = dbRes.find((item) => item.UserEmail === targetEmail);
  if (!targetUser) {
    throw new Error("couldn't find this user by email");
  }
  return targetUser;
};
