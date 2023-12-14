import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBW_c5fTDdDjrpUyp-Bf2CSQNfz34Qvu3w",
  authDomain: "expinc-e2503.firebaseapp.com",
  databaseURL: "https://expinc-e2503-default-rtdb.firebaseio.com",
  projectId: "expinc-e2503",
  storageBucket: "expinc-e2503.appspot.com",
  messagingSenderId: "215157086186",
  appId: "1:215157086186:web:162678c4ebe459be990493",
  measurementId: "G-ZG15K8SBHS"
};

const app = initializeApp(firebaseConfig);
export default app;