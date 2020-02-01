import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyA4n9B_VF6mr89WICLHJqvHA_RMqg47F_E",
  authDomain: "react-firebase-db-host-app.firebaseapp.com",
  databaseURL: "https://react-firebase-db-host-app.firebaseio.com",
  projectId: "react-firebase-db-host-app",
  storageBucket: "react-firebase-db-host-app.appspot.com",
  messagingSenderId: "571627584111",
  appId: "1:571627584111:web:68bb0a10aaf1aeef716b9a",
  measurementId: "G-RDDQBWDX4Z"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

// export default firebase;

const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const firebaseAnalytics = firebaseApp.analytics();
export const firestore = firebaseApp.firestore();
export default firebaseApp;
