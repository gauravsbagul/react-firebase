const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Gaurav!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc))
})

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {

        const project = doc.data();
        const notification = {
            content: 'Added a new project',
            user: `${ project.firstName } ${ project.lastName } created the new project`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)

    })

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore()
            .collection('users')
            .doc(user.uid)
            .get().then(doc => {
                const newUser = doc.data()

                const notification = {
                    content: 'New User Joint the platform',
                    user: `${ newUser.firstName } ${ newUser.lastName } has joined the platform`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                return createNotification(notification)
            })
    })
