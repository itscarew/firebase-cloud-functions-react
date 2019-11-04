const initialState = {
  projects: []
};

const projectReducer = (state = initialState, action) => {
  if (action.type === "CREATE_PROJECT") {
    return state;
  } else if (action.type === "CREATE_PROJECT_ERROR") {
    return state;
  } else {
    return state;
  }
};

export default projectReducer;
