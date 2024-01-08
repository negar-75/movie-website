import { NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyADBB5Vl4y0myYxCEKPxBLw93fLeotR2pE",
  authDomain: "cinema-city-e891f.firebaseapp.com",
  databaseURL: "https://cinema-city-e891f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cinema-city-e891f",
  storageBucket: "cinema-city-e891f.appspot.com",
  messagingSenderId: "181995918794",
  appId: "1:181995918794:web:62017505a0c048fd5a2b33",
  measurementId: "G-E3T8ZXMTWH"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const productsRef = ref(database, "products"); 

export async function GET() {
  try {
    const dataPromise = new Promise((resolve) => {
      onValue(productsRef, (snapshot) => {
        const data = snapshot.val();
       
        resolve(data);
      });
    });

    const data = await dataPromise;
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}



