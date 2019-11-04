const initialState = {
  authError: "",
  user: []
};

const authReducer = (state = initialState, action) => {
  if (action.type === "LOGIN_SUCCESS") {
    return {
      ...state,
      authError: null
    };
  } else if (action.type === "LOGIN_ERROR") {
    return {
      ...state,
      authError: "Login Failed"
    };
  } else if (action.type === "SIGNOUT_SUCCESS") {
    return state;
  } else if (action.type === "SIGNUP_SUCCESS") {
    return {
      ...state,
      authError: null
    };
  } else if (action.type === "SIGNUP_ERROR") {
    return {
      ...state,
      authError: action.err.message
    };
  } else {
    return state;
  }
};

export default authReducer;
