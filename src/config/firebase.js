import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAsQfrFjxrk9IsU-TxtYevoXSon__CIWQ",
  authDomain: "homeseva-dd387.firebaseapp.com",
  projectId: "homeseva-dd387",
  storageBucket: "homeseva-dd387.appspot.com",
  messagingSenderId: "38374177338",
  appId: "1:38374177338:web:ecd40af08f74de55c11303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);