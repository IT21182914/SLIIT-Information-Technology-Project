import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyDyradk8d11WQyRMI24Ct69Rg9g4oxpX8E",
    authDomain: "img-offerme.firebaseapp.com",
    projectId: "img-offerme",
    storageBucket: "img-offerme.appspot.com",
    messagingSenderId: "998635673735",
    appId: "1:998635673735:web:2a16981b74dffeffeb0022"
});



// Firebase storage reference
const storage = getStorage(app);
export default storage;