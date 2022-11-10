// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAFLpmTF1G4KEzbankxJuEtlaFejmtjQ2c',
  authDomain: 'react-study-56c25.firebaseapp.com',
  projectId: 'react-study-56c25',
  storageBucket: 'react-study-56c25.appspot.com',
  messagingSenderId: '737294251353',
  appId: '1:737294251353:web:25617a2e94c6f3658bc848',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app); // Firestore 데이터베이스를 사용할 것이기 때문에 Firestore 함수도 import 함.
