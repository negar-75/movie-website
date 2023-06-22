import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await fetch(
      "https://cinema-city-e891f-default-rtdb.europe-west1.firebasedatabase.app/products.json"
    );
    const response = await result.json();
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
  }
}
