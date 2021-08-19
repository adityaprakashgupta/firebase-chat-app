import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAu9eczRjNRxaLS6tGkPydfvAHniFwUELk",
    authDomain: "apgchatapp.firebaseapp.com",
    projectId: "apgchatapp",
    storageBucket: "apgchatapp.appspot.com",
    messagingSenderId: "564302431532",
    appId: "1:564302431532:web:3cf8684506c70ae150d889",
    measurementId: "G-VQZXCNBCZ5"


})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
