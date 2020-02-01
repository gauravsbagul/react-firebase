import firebase, { firestore } from "../../../config/firebaseConfig";

export const signIn = credentials => {
  console.log("TCL: signIn credentials", credentials);
  const email = credentials.email;
  const password = credentials.password;
  return (dispatch, getState) => {
    // const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(querySnapshot => {
        console.log("TCL: querySnapshot ", querySnapshot.docs);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: querySnapshot.docs
        });
      })
      .catch(error => {
        console.log("TCL: signIn error", error);
        dispatch({
          type: "LOGIN_ERROR",
          payload: error
        });
      });
  };
};

export const signout = () => {
  console.log("TCL: signout");

  return (dispatch, getState) => {
    // const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(response => {
        console.log("TCL: signout -> response", response);
        dispatch({
          type: "SIGNOUT",
          payload: "true"
        });
      });
  };
};
