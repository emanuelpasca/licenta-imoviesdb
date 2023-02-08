import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from ".";

export const add = async (collectionName, data) => {
  return addDoc(collection(db, collectionName), data).then((docRef) => {
    return { ...data, id: docRef.id };
  });
};

export const whereQuery = async (
  collectionName,
  field,
  value,
  operator = "=="
) => {
  return getDocs(
    query(collection(db, collectionName), where(field, operator, value))
  ).then((querySnapshot) => {
    let results = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      if (data) {
        data = { ...data, id: doc.id };
      }
      results.push(data);
    });
    return results;
  });
};

export const get = async (collectionName, documentId) => {
  return getDoc(doc(db, collectionName, documentId)).then((docSnap) => {
    return docSnap.data();
  });
};

export const set = async (collectionName, documentId, data) => {
  return setDoc(doc(db, collectionName, documentId), data, {
    merge: true,
  }).then(() => {
    return;
  });
};

export const getAll = async (collectionName) => {
  return getDocs(collection(db, collectionName)).then((querySnapshot) => {
    let results = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      if (data) {
        Object.assign(data, { id: doc.id });
      }
      results.push(data);
    });
    return results;
  });
};

export const remove = async (collectionName, documentId) => {
  return deleteDoc(doc(db, collectionName, documentId));
};
