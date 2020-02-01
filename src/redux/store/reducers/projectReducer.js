const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return {
        ...state,
        createProject: action.payload
      };
      break;
    case "CREATE_PROJECT_ERROR":
      return {
        ...state,
        createProjectError: action.payload
      };
      break;
    case "GET_PROJECTS":
      return {
        ...state,
        getProjects: action.payload
      };
      break;
    default:
      return state;
  }
};

export default projectReducer;
