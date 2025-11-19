import { NextResponse } from "next/server";
import { requireRole } from "@/lib/rbac";

export async function GET(request: Request) {
  const auth = await requireRole(["admin", "user"])(request);
  
  if (auth instanceof NextResponse) {
    return auth;
  }

  return NextResponse.json({ 
    message: "Protected content accessed", 
    user: auth.user });
}