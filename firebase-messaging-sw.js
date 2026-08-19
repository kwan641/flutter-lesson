importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDgcMYL7UUnxEDjFyTBqXRTYoKVCROK0MM",
  authDomain: "food-delivery-app-da35e.firebaseapp.com",
  projectId: "food-delivery-app-da35e",
  storageBucket: "food-delivery-app-da35e.firebasestorage.app",
  messagingSenderId: "317423908671",
  appId: "1:317423908671:web:488bc9423400e350ee058a",
});

const messaging = firebase.messaging();