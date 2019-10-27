export const createProject = project => {
  return (dispatch, getState, { getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Allan",
        authorLastName: "Johnson",
        authorID: 123456,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error: err });
      });
  };
};
