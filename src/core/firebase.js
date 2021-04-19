import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyBKmTDnaZh23-m9Ogf_4fj_l9S1yFaZXpE",
  authDomain: "portfolio-ecb4f.firebaseapp.com",
  projectId: "portfolio-ecb4f",
  storageBucket: "portfolio-ecb4f.appspot.com",
  messagingSenderId: "921576670494",
  appId: "1:921576670494:web:8787561ba2879f4982750f",
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
