import { NextResponse } from "next/server";
import { signToken } from "@/lib/jwt";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email !== "test@example.com" || password !== "password123") {
    return NextResponse.json({ 
      error: "Invalid credentials" }, 
      { status: 401 });
  }

  const token = signToken({ email });
  console.log("Generated token:", token);

  return NextResponse.json({ token });
}