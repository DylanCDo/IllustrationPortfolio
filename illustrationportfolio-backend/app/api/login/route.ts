import { NextResponse } from "next/server";
import { signToken } from "@/lib/jwt";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  let role = "";

  if (email == "admin@example.com" && password === "password123") {
    role = "admin"
  } else if (email == "user@example.com" && password === "password123") {
    role = "user"
  } else {
    return NextResponse.json({ 
      error: "Invalid credentials" }, 
      { status: 401 });
  }

  const token = signToken({ email, role});
  console.log("Generated token:", token);

  return NextResponse.json({ token });
}