import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;
if (!SECRET) throw new Error("JWT_SECRET is not defined");

export function signToken(payload: object, expiresIn: string = "1h") {
  return jwt.sign(payload, SECRET as jwt.Secret, { expiresIn });
}

export function verifyToken(token: string): string | JwtPayload | null {

  let decoded = null;

  try{
    decoded = jwt.verify(token, SECRET as jwt.Secret);
  } catch (error) {
  
    console.error(error);
  }

  return decoded;
}
