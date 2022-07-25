import { initializeApp, getApps } from "firebase/app";

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
  } else {
    firebaseApp = apps[0];
    getUser();
  }
});
