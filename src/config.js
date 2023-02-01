import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDzfHoOGauuzinvuWwU65fRfibg7YrYtgE",
    authDomain: "e-commerce-ce1df.firebaseapp.com",
    projectId: "e-commerce-ce1df",
    storageBucket: "e-commerce-ce1df.appspot.com",
    messagingSenderId: "190578093501",
    appId: "1:190578093501:web:7ccc4a621e7cf09bd0b6d4"
  };


  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export {db}