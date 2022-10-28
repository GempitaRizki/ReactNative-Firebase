import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import Constants from "expo-constants" 
//konfigurasi dari firebase
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  databaseURL: Constants.manifest.extra.databaseURL,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  measurementId: Constants.manifest.extra.measurementId
};

//inisialisasi dari firebase
initializeApp(firebaseConfig)
export default database = getFirestore()

