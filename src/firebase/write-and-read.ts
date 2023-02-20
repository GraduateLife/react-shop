import {
  collection as getCollectionRef,
  writeBatch,
  doc as getDocRef,
  query,
  getDocs,
  getDoc,
} from "firebase/firestore";

import { db } from "./initialization";

/**
 * @warning always overwrite old data
 * @ability create/update one document and fill its fields with the collection you given
 * @reminder firestore structure:collectionName->documentName->fields
 */
export const writeOne = async <T extends { [x: string]: any }>(
  collectionName: string,
  docName: string,
  objectAsFields: T
) => {
  const collectionRef = getCollectionRef(db, collectionName);
  const batch = writeBatch(db);
  const docRef = getDocRef(collectionRef, docName);
  batch.set(docRef, objectAsFields);

  await batch.commit();
  return "ok";
};

/**
 *
 * @param collectionName
 * @returns all documents of the collection in form of array
 */

export const readOneDocument = async <T>(
  collectionName: string,
  docName: string
) => {
  const docRef = getDocRef(db, collectionName, docName);
  const mightDocSnapshot = await getDoc(docRef);
  if (mightDocSnapshot.exists()) return mightDocSnapshot.data() as T;
  throw new Error("could not read such document");
};

export const readCollection = async <T>(collectionName: string) => {
  const collectionRef = getCollectionRef(db, collectionName);
  const q = query(collectionRef);
  const queryRes = await getDocs(q);
  const container: T[] = [];
  queryRes.forEach((x) => {
    container.push(x.data() as T);
  });

  return container;
};
