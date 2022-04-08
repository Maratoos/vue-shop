import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBw7k9m0YWmzG3QlHf1D3ma-O4AmU2B_Jc",
  authDomain: "vue-shop-f8da1.firebaseapp.com",
  projectId: "vue-shop-f8da1",
  storageBucket: "vue-shop-f8da1.appspot.com",
  messagingSenderId: "42006580486",
  appId: "1:42006580486:web:124998039f246e288c2287"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)