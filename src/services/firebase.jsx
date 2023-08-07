import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, where, query } from 'firebase/firestore';

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
  export async function getCategory(categoriaURL) {
    const coleccionProductos = collection(db, 'fotodigital');
    const q = query(coleccionProductos, where('category', '==', categoriaURL));
    let snapshotProductos = await getDocs(q);
    const documents = snapshotProductos.docs;
    const dataProductos = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProductos;
  }
  export async function getCategoryDV(categoriaURL) {
    const coleccionProductos = collection(db, 'diariodeviaje');
    const q = query(coleccionProductos, where('category', '==', categoriaURL));
    let snapshotProductos = await getDocs(q);
    const documents = snapshotProductos.docs;
    const dataProductos = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProductos;
  }
  export async function getCategorySub(categoriaURL) {
    const coleccionProductos = collection(db, 'subcarp');
    const q = query(coleccionProductos, where('category', '==', categoriaURL));
    let snapshotProductos = await getDocs(q);
    const documents = snapshotProductos.docs;
    const dataProductos = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProductos;
  }
  export async function getFotoDigital() {
    const coleccionProductos = collection(db,'fotodigcats');
  let snapshotProducts= await getDocs(coleccionProductos)
  const documents= snapshotProducts.docs;
   const dataProducts= documents.map(doc=>doc.data())
  return dataProducts
  }
  export async function getDiarioDeViajes() {
    const coleccionProductos = collection(db,'diariodeviajecats');
  let snapshotProducts= await getDocs(coleccionProductos)
  const documents= snapshotProducts.docs;
   const dataProducts= documents.map(doc=>doc.data())
  return dataProducts
  }
  export async function getIndex() {
    const coleccionProductos = collection(db,'index');
  let snapshotProducts= await getDocs(coleccionProductos)
  const documents= snapshotProducts.docs;
   const dataProducts= documents.map(doc=>doc.data())
  return dataProducts
  }