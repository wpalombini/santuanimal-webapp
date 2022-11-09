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
import { useAuthState } from 'react-firebase-hooks/auth';

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

export const getUserId = (): string | undefined => {
  return auth.currentUser?.uid;
};

export const getUserTokenId = async (): Promise<string | undefined> => {
  return await auth.currentUser?.getIdToken(false);
};

export const getUserName = (): string | null | undefined => {
  return auth.currentUser?.displayName;
};

export const login = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();

  return await signInWithPopup(auth, provider);
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};

export const useAuthenticationState = () => useAuthState(getAuth());
