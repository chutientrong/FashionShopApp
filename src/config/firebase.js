import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add firebase config
// const firebaseConfig = {
//   apiKey: Constants.manifest.extra.apiKey,
//   authDomain: Constants.manifest.extra.authDomain,
//   projectId: Constants.manifest.extra.projectId,
//   storageBucket: Constants.manifest.extra.storageBucket,
//   messagingSenderId: Constants.manifest.extra.messagingSenderId,
//   appId: Constants.manifest.extra.appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCqmn0wETfNRv4rSGdsNKSAtw8tX10xcW8",
  authDomain: "fashionshoppi.firebaseapp.com",
  projectId: "fashionshoppi",
  storageBucket: "fashionshoppi.appspot.com",
  messagingSenderId: "822860164098",
  appId: "1:822860164098:web:978fcd515e8796b455cb1b",
  measurementId: "G-NGM6SYPDC0"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
