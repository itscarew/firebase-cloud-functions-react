const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello Your Serenec");
// });

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification);
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "Added a new Project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      date: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("user")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();

      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        date: admin.firestore.FieldValue.serverTimestamp()
      };

      return createNotification(notification);
    });
});
