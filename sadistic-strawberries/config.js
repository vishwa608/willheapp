import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhl-wBZjRrL502fJLRrMF3QQUSGXbDfL4",
  authDomain: "the-willyapp.firebaseapp.com",
  projectId: "the-willyapp",
  storageBucket: "the-willyapp.appspot.com",
  messagingSenderId: "675801543566",
  appId: "1:675801543566:web:92c9422eec66a771656adf",
  measurementId: "G-FMTMDJ971K"
};

// Initialize Firebase
if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
