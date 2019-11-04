const initialState = {
  authError: "",
  user: []
};

const authReducer = (state = initialState, action) => {
  if (action.type === "LOGIN_SUCCESS") {
    console.log("Login successful");
    return {
      ...state,
      authError: "null"
    };
  } else if (action.type === "LOGIN_ERROR") {
    console.log("Login Failed");

    return {
      ...state,
      authError: "Login Failed"
    };
  } else if (action.type === "SIGNOUT_SUCCESS") {
    console.log("signout success");
    return state;
  } else if (action.type === "SIGNUP_SUCCESS") {
    console.log("signup success");
    return {
      ...state,
      authError: null
    };
  } else if (action.type === "SIGNUP_ERROR") {
    console.log("failed", action.err);
    return {
      ...state,
      authError: action.err.message
    };
  } else {
    return state;
  }
};

export default authReducer;
