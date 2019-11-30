import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARqhPMb6TF1mMHZy0yMWIR9i58KB3S9co",
    authDomain: "headache-db.firebaseapp.com",
    databaseURL: "https://headache-db.firebaseio.com",
    projectId: "headache-db",
    storageBucket: "headache-db.appspot.com",
    messagingSenderId: "628076735772",
    appId: "1:628076735772:web:9f4bc6bd6f7ca642ba1ed9",
    measurementId: "G-BJWWEGWNBS"
  };
var app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}
export default app.database();