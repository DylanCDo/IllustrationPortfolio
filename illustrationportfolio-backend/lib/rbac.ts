import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function requireRole(allowedRoles: string[]) {
    return async (request: Request) => {
        const authHeader = request.headers.get("authorization")

        if(!authHeader) {
            return NextResponse.json(
                { error: "Missing Authorization header" },
                { status: 401 }
            );
        }
        
        const token = authHeader.replace("Bearer ", "");

        const decoded = verifyToken(token);
        
        if (!decoded || typeof decoded === "string") {
            return NextResponse.json({ 
            error: "Invalid or expired token" }, 
            { status: 401 });
        }

        const userRole = decoded.role;

        if (!allowedRoles.includes(userRole)) {
            return NextResponse.json(
                { error: "Forbidden: insufficient permissions" },
                { status: 403 }
            );
        }

        return { user: decoded};
    };
}