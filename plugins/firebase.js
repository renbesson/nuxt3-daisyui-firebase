import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const apps = getApps();

  let firebaseApp;
  let firebaseAuth;
  let firestoreDb;
  let fireStorage;

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
      firestoreDb = getFirestore(firebaseApp);
      fireStorage = getStorage(firebaseApp);
      return {
        provide: {
          firebaseApp,
          firebaseAuth,
          firestoreDb,
          fireStorage,
        },
      };
    } catch (e) {
      alert(`Failed to initialize Firebase: ${e.message}`);
    }
  } else {
    firebaseApp = apps[0];
  }
});
