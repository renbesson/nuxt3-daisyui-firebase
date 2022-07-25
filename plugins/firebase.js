import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const apps = getApps();

  let firebaseApp;
  let firebaseAuth;
  let firestore;

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
    try {
      firebaseApp = initializeApp(firebaseConfig);
      firebaseAuth = getAuth(firebaseApp);
      firestore = getFirestore(firebaseApp);
      return {
        provide: {
          firebaseApp,
          firebaseAuth,
        },
      };
    } catch (e) {
      console.log(`Failed to initialize Firebase: ${e.message}`);
    }
  } else {
    firebaseApp = apps[0];
  }
});
