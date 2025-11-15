import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization")

  if (!authHeader) {
    return NextResponse.json({ error: 
      "Missing Authorization header" }, 
      { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");

  const decoded = verifyToken(token);
  
  if (!decoded) {
    return NextResponse.json({ 
      error: "Invalid or expired token" }, 
      { status: 401 });
  }

  return NextResponse.json({ 
    message: "Protected content accessed", 
    user: decoded });
}