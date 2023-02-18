import {
  collection as getCollectionRef,
  writeBatch,
  doc as getDocRef,
  query,
  getDocs,
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
 * @param objectsToWrite you must provide a json file like object to write
 * @returns
 */
export const writeMap = async <T extends { [x: string]: any }>(
  collectionName: string,
  objectsToWrite: Record<string, T>
) => {
  const collectionRef = getCollectionRef(db, collectionName);
  const batch = writeBatch(db);
  const docNames = Object.keys(objectsToWrite);
  docNames.forEach((docName) => {
    const docRef = getDocRef(collectionRef, docName);
    batch.set(docRef, objectsToWrite[docName]);
  });
  await batch.commit();
  return "ok";
};

/**
 *
 * @param collectionName
 * @returns all documents of the collection in form of array
 */
export const readDocumentsAsArr = async <T>(collectionName: string) => {
  const collectionRef = getCollectionRef(db, collectionName);
  const q = query(collectionRef);
  const queryRes = await getDocs(q);
  const container: T[] = [];
  queryRes.forEach((x) => {
    container.push(x.data() as T);
  });

  return container;
};
