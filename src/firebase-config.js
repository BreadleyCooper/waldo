import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBARCvyTHTfzgGGOfQi6jwjqA1ZZ2IdrWA",
  authDomain: "where-waldo-90f28.firebaseapp.com",
  projectId: "where-waldo-90f28",
  storageBucket: "where-waldo-90f28.appspot.com",
  messagingSenderId: "738887008121",
  appId: "1:738887008121:web:ea82ed4d1155c9366a39a8"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { firestore, timestamp };