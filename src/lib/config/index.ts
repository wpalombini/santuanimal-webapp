export const getAppVersion = () => process.env.REACT_APP_VERSION;

/* Firebase */
export const getFirebaseApiKey = () => process.env.REACT_APP_FIREBASE_API_KEY;
export const getFirebaseAuthDomain = () => process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
export const getFirebaseProjectId = () => process.env.REACT_APP_FIREBASE_PROJECT_ID;
export const getFirebaseStorageBucket = () => process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
export const getFirebaseMessagingSenderId = () => process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
export const getFirebaseAppId = () => process.env.REACT_APP_FIREBASE_APP_ID;

export const isEnvProduction = () => process.env.NODE_ENV === 'production';
