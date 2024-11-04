mport { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4XLx9XQKjjJ4xxoQWve8anBw4hUKsql8",
  authDomain: "lanhouse-42fee.firebaseapp.com",
  projectId: "lanhouse-42fee",
  storageBucket: "lanhouse-42fee.appspot.com",
  messagingSenderId: "8810774010",
  appId: "1:8810774010:web:c58700924d135608d07843",
  measurementId: "G-0XYNP9EXX5"
};

const app = initializeApp(firebaseConfig);

export {app}