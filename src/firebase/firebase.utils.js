import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCBiXpdS3kdzBZi2FGRTFLZSze4evrGevE",
  authDomain: "react-ecommerce-app-bb1e0.firebaseapp.com",
  databaseURL: "https://react-ecommerce-app-bb1e0.firebaseio.com",
  projectId: "react-ecommerce-app-bb1e0",
  storageBucket: "react-ecommerce-app-bb1e0.appspot.com",
  messagingSenderId: "162644829076",
  appId: "1:162644829076:web:8dc8b7380652cbe57da581",
  measurementId: "G-X9DBYFWC3S"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase