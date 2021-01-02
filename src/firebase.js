import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC92Z-aIe2WT0wDFvLKPJXaV4fgiV9EtoU",
  authDomain: "drive-clone-akky.firebaseapp.com",
  projectId: "drive-clone-akky",
  storageBucket: "drive-clone-akky.appspot.com",
  messagingSenderId: "796326526457",
  appId: "1:796326526457:web:e9f302de5c994e2f501128",
  measurementId: "G-JK0KZYN8ZQ",
});

const firestore = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export const database = {
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
};
export const getCurrentTimestamp =
  firebase.firestore.FieldValue.serverTimestamp;
export default app;
