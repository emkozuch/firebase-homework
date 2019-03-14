const firebase = require('firebase')

var config = {
    apiKey: "AIzaSyC1eL8DLFVc1PXSQGypdFpntCcqY01oeAY",
    authDomain: "fir-homework-b6ae4.firebaseapp.com",
    databaseURL: "https://fir-homework-b6ae4.firebaseio.com",
    projectId: "fir-homework-b6ae4",
    storageBucket: "fir-homework-b6ae4.appspot.com",
    messagingSenderId: "133922265356"
};

const app = firebase.initializeApp(config);
export const db = app.database();
