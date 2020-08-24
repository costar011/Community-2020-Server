import firebase from "firebase";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.FS_apikey);
console.log(process.env.FS_apikey);
console.log(process.env.FS_apikey);
console.log(process.env.FS_apikey);

const firebaseConfig = {
  apikey: process.env.FS_apikey,
  authDomain: process.env.FS_authDomain,
  projectId: process.env.FS_projectId,
  databaseURL: process.env.FS_databaseURL,
  storageBucket: process.env.FS_storageBucket,
  messagingSenderId: process.env.FS_messagingSenderId,
  appId: process.env.FS_appId,
  measurementId: process.env.FS_measurementId,
};

firebase.initializeApp(firebaseConfig);

const firestore = new firebase.firestore();

export default firestore;
