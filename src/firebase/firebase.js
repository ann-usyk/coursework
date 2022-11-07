import {initializeApp} from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyBL6yVbyhe-RNaSfOkFfXpfrcReaGP3E8w",
    authDomain: "nature-c18df.firebaseapp.com",
    databaseURL: "https://nature-c18df-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nature-c18df",
    storageBucket: "nature-c18df.appspot.com",
    messagingSenderId: "1083788973339",
    appId: "1:1083788973339:web:abd214b0d6ea91047defbe",
};

export let FIRE_APP;

export function initFireApp(config = firebaseConfig) {
    FIRE_APP = initializeApp(firebaseConfig);
}

export function checkApp(app) {
    app = app || FIRE_APP;
    if (!app) {
        throw new Error('Before using firebase function you should initialize the Firebase App.');
    }

    return app
}
