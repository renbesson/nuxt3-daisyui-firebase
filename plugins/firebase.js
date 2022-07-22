import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let firebaseApp;

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const apps = getApps();

  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: config.FIREBASE_AUTH_DOMAIN,
    projectId: config.FIREBASE_PROJECT_ID,
    storageBucket: config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
    measurementId: config.FIREBASE_MESUREMENT_ID,
    appId: config.FIREBASE_APP_ID,
  };

  if (!apps.length) {
    firebaseApp = initializeApp(firebaseConfig);
    console.log("Firebase Not Initialized");
  } else {
    firebaseApp = apps[0];
    console.log("Firebase Initialized");
  }
});
