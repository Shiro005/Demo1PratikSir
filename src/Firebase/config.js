import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, get, query, orderByChild, equalTo, off, onValue, update, remove } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD0RpzYDJnNGszojtI_BVkjLkUWbHyPkOU",
  authDomain: "pratiktondedemo.firebaseapp.com",
  projectId: "pratiktondedemo",
  storageBucket: "pratiktondedemo.firebasestorage.app",
  messagingSenderId: "210106333841",
  appId: "1:210106333841:web:5cdf24ec0f0dc79c6a1d30",
  databaseURL:"https://pratiktondedemo-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, push, get, query, orderByChild, equalTo, off, onValue, update, remove };


