
import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyDnwXmno9MsAIaE_BIgV63JINZ1sB234Zk",
    authDomain: "fb-clone-f6617.firebaseapp.com",
    projectId: "fb-clone-f6617",
    storageBucket: "fb-clone-f6617.appspot.com",
    messagingSenderId: "1079124036387",
    appId: "1:1079124036387:web:89bdfe53da444a91b65a96",
    measurementId: "G-3XXYZKHTYL"
    
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

