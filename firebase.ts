import {getApp,getApps,initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getFunctions} from 'firebase/functions'
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyBofdHacX7NuvFTM2ct6OZ3fRameFCqbfw",
    authDomain: "dropbox-4966e.firebaseapp.com",
    projectId: "dropbox-4966e",
    storageBucket: "dropbox-4966e.appspot.com",
    messagingSenderId: "158664591799",
    appId: "1:158664591799:web:516c60e0db28168b334032",
    measurementId: "G-Q78B2K36RP"
  };

  const app=getApps().length?getApp():initializeApp(firebaseConfig);
  const db=getFirestore(app);
  const storage=getStorage(app);

  export {db,storage}; 
