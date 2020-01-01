import app from 'firebase/app';
const config = {
    apiKey: "AIzaSyAkyqf6A5NDcFIA40EzGrnLOhuR6dkeOMQ",
    authDomain: "react-firebase-auth-4d70e.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-4d70e.firebaseio.com",
    projectId: "react-firebase-auth-4d70e",
    storageBucket: "react-firebase-auth-4d70e.appspot.com",
    messagingSenderId: "848281231615",
    appId: "1:848281231615:web:025abe38f367561497ecca",
    measurementId: "G-RMLW524K6E"
};
class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;