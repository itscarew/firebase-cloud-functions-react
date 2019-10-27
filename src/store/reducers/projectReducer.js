const initialState = {
  projects: [
    { id: 1, title: "Flex", content: "Over the roof" },
    { id: 3, title: "Over", content: "Over the the roof top , make up" },
    { id: 4, title: "Road", content: "Make me do it all over again" }
  ]
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
