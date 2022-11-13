import { database } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const getData = async (collectionName) => {
  return await getDocs(collection(database, collectionName));
};

const setData = async (collectionName, data) => {
  return await addDoc(collection(database, collectionName), data);
};

export { getData, setData };
