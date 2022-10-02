import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  UserCredential,
  connectAuthEmulator,
} from 'firebase/auth';
import {
  getFirebaseApiKey,
  getFirebaseAppId,
  getFirebaseAuthDomain,
  getFirebaseMessagingSenderId,
  getFirebaseProjectId,
  getFirebaseStorageBucket,
  isEnvProduction,
} from 'lib/config';

const firebaseConfig = {
  apiKey: getFirebaseApiKey(),
  authDomain: getFirebaseAuthDomain(),
  projectId: getFirebaseProjectId(),
  storageBucket: getFirebaseStorageBucket(),
  messagingSenderId: getFirebaseMessagingSenderId(),
  appId: getFirebaseAppId(),
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
if (!isEnvProduction()) {
  connectAuthEmulator(auth, 'http://localhost:9099');
}

export const login = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();

  return await signInWithPopup(auth, provider);
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};
