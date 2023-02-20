// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARMa4Q_Bu2wPho0ZYCdq8U-uMvj-P3V8c",
  authDomain: "vue-rm-hoodies.firebaseapp.com",
  projectId: "vue-rm-hoodies",
  storageBucket: "vue-rm-hoodies.appspot.com",
  messagingSenderId: "712789437566",
  appId: "1:712789437566:web:ac6461b2601eb44a18bc2f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig);