import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCOn9fSq3YeXc87OKtE_P8V051Ea1CRAoY",
    authDomain: "quora-8e8eb.firebaseapp.com",
    projectId: "quora-8e8eb",
    storageBucket: "quora-8e8eb.appspot.com",
    messagingSenderId: "523124269567",
    appId: "1:523124269567:web:7069574e6c9d4dfe6287ca",
    measurementId: "G-CQT4JSZCTE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

const db = firebaseApp.firestore()

export { auth, provider }
export default db;
