import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBz80Hh3vLyaNwwy9mkwhCpHSOtis9Kvwc",
  authDomain: "auth-test-4c44e.firebaseapp.com",
  databaseURL: "https://auth-test-4c44e.firebaseio.com",
  projectId: "auth-test-4c44e",
  storageBucket: "auth-test-4c44e.appspot.com",
  messagingSenderId: "84927251797"
  });

  // firebase.initializeApp(config);
  
  // Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
  
  // Disable deprecated features
  db.settings({
    timestampsInSnapshots: true
  });

  export default db;