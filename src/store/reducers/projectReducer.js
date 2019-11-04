const initialState = {
  projects: []
};

const projectReducer = (state = initialState, action) => {
  if (action.type === "CREATE_PROJECT") {
    console.log("created project", action.project);
    return state;
  } else if (action.type === "CREATE_PROJECT_ERROR") {
    console.log("crrate project error", action.error);
    return state;
  } else {
    return state;
  }
};

export default projectReducer;
