const initialState = {
  authError: ""
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
  } else {
    return state;
  }
};

export default authReducer;
