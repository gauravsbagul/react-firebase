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
        console.log("TCL: querySnapshot ", querySnapshot);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: querySnapshot
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
          type: "LOGIN_SUCCESS",
          payload: null
        });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(response => {
        console.log("TCL: response", response);
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({
          type: "SIGN_UP",
          payload: true
        });
      })
      .catch(err => {
        console.log("TCL signUp: err", err);
        dispatch({
          type: "SIGN_UP",
          payload: false
        });
      });
  };
};
