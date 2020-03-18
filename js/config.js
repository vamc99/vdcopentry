/* Your web app's Firebase configuration */
var firebaseConfig = {
    apiKey: "AIzaSyAQo5DBOEzVlMKSL_kL7StxevK-oqjQMYs",
    authDomain: "fir-web-4a952.firebaseapp.com",
    databaseURL: "https://fir-web-4a952.firebaseio.com",
    projectId: "fir-web-4a952",
    storageBucket: "fir-web-4a952.appspot.com",
    messagingSenderId: "691772013097",
    appId: "1:691772013097:web:3675b18a76256b6c173a38",
    measurementId: "G-XV2Z4YM5E1"
};
/* Initialize Firebase */
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();