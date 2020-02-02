const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Faild",
        login: null
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
        signOut: action.payload,
        login: null
      };
      break;
    case "SIGN_UP":
      return {
        ...state,
        login: action.payload,
        authError: null
      };
      break;
    default:
      return state;
  }
};

export default authReducer;
