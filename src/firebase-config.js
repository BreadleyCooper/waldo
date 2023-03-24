
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBARCvyTHTfzgGGOfQi6jwjqA1ZZ2IdrWA",
  authDomain: "where-waldo-90f28.firebaseapp.com",
  projectId: "where-waldo-90f28",
  storageBucket: "where-waldo-90f28.appspot.com",
  messagingSenderId: "738887008121",
  appId: "1:738887008121:web:ea82ed4d1155c9366a39a8"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}


const firebaseConfig = {
  apiKey: "AIzaSyBARCvyTHTfzgGGOfQi6jwjqA1ZZ2IdrWA",
  authDomain: "where-waldo-90f28.firebaseapp.com",
  projectId: "where-waldo-90f28",
  storageBucket: "where-waldo-90f28.appspot.com",
  messagingSenderId: "738887008121",
  appId: "1:738887008121:web:ea82ed4d1155c9366a39a8"
};