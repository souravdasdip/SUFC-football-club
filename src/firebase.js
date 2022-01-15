// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


//Initialize Firebase
const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL
});

//services

export default app;  

//************************************************************************* */


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDKNRGachg8aqrJ-rTKkvoYfWvzVozyilE",
//   authDomain: "sufc-d16f0.firebaseapp.com",
//   projectId: "sufc-d16f0",
//   storageBucket: "sufc-d16f0.appspot.com",
//   databaseURL: "https://sufc-d16f0-default-rtdb.asia-southeast1.firebasedatabase.app",
//   messagingSenderId: "100443161926",
//   appId: "1:100443161926:web:62e130aba668b11d779147"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app