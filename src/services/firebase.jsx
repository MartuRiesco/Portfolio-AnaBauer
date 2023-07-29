import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWpeWnaGlBdVndv7x-uWNL5XNp5IQj77A",
    authDomain: "portfolio-anabauer.firebaseapp.com",
    projectId: "portfolio-anabauer",
    storageBucket: "portfolio-anabauer.appspot.com",
    messagingSenderId: "936918766498",
    appId: "1:936918766498:web:fa2e9f5165ac9dbb9758fb"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export async function getFotoAnalogica() {
    const coleccionProductos = collection(db,'fotoanalogica');
  let snapshotProducts= await getDocs(coleccionProductos)
  const documents= snapshotProducts.docs;
   const dataProducts= documents.map(doc=>doc.data())
  return dataProducts
  }
  export async function getVideosDireccion() {
    const coleccionProductos = collection(db,'video_direccion');
  let snapshotProducts= await getDocs(coleccionProductos)
  const documents= snapshotProducts.docs;
   const dataProducts= documents.map(doc=>doc.data())
  return dataProducts
  }
  export async function getVideosFotografia() {
    const coleccionProductos = collection(db,'video_fotografia');
  let snapshotProducts= await getDocs(coleccionProductos)
  const documents= snapshotProducts.docs;
   const dataProducts= documents.map(doc=>doc.data())
  return dataProducts
  }