import { database } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const getData = async (collectionName: string) => {
  return await getDocs(collection(database, collectionName));
};

const setData = async (collectionName: string, data: object) => {
  return await addDoc(collection(database, collectionName), data);
};

export { getData, setData };
