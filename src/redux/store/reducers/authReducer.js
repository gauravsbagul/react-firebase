const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Faild"
      };
      break;
    case "LOGIN_SUCCESS":
      return {
        ...state,
        login: action.payload,
        authError: null
      };
      break;
    case "SIGNOUT":
      return {
        ...state,
        signOut: action.payload
      };
      break;
    default:
      return state;
  }
};

export default authReducer;
