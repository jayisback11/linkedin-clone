import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6hwdnDih-h08mSaII9343NwGZA0VwFPo",
  authDomain: "linkedin-clone-238f1.firebaseapp.com",
  projectId: "linkedin-clone-238f1",
  storageBucket: "linkedin-clone-238f1.appspot.com",
  messagingSenderId: "489544299614",
  appId: "1:489544299614:web:8144fcc6f429dec4a930cf",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

export { db, auth };
