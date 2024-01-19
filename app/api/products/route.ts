import { NextResponse } from "next/server";
import { getDatabase, ref, onValue } from "firebase/database";
import  firebaseApp  from "../../../firebase/firebaseInit";

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



