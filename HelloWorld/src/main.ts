import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBei1hYeO1PBNxxMEoYZFaMiETfKtJOfD8",
  authDomain: "helloworld-b16ae.firebaseapp.com",
  projectId: "helloworld-b16ae",
  storageBucket: "helloworld-b16ae.appspot.com",
  messagingSenderId: "643800537879",
  appId: "1:643800537879:web:bb4499b8dae2cd9923b552",
  measurementId: "G-4M22ER2KGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
