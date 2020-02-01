import { firestore } from "../../../config/firebaseConfig";

export const createProject = project => {
  console.log("TCL: createProject project", project);
  return (dispatch, getState) => {
    firestore
      .collection("projects")
      .add({
        ...project,
        firstName: "Gaurav",
        lastName: "Bagul",
        // id: 12345,
        createdAt: new Date()
      })
      .then(response => {
        console.log("TCL:createProject  response", response);
        dispatch({
          type: "CREATE_PROJECT",
          payload: project
        });
      })
      .catch(error => {
        console.log("TCL:createProject error", error);
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          payload: error
        });
      });
  };
};

export const getProjects = () => {
  return (dispatch, getState) => {
    firestore
      .collection("projects")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // console.log("TCL: getProjects -> doc", doc);
          console.log("TCL: getProjects -> doc", doc.id, "->", doc.data());
          // doc.data() is never undefined for query doc snapshots
          dispatch({
            type: "GET_PROJECTS",
            payload: doc.data()
          });
        });
      })
      .catch(error => {
        console.log("TCL:createProject error", error);
        dispatch({
          type: "GET_PROJECTS_ERROE",
          payload: error
        });
      });
  };
};
