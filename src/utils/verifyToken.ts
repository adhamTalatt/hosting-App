import { NextRequest } from "next/server";
import { JWTPayload } from "@/utils/type";
import jwt from "jsonwebtoken";

//Verify Token From API END point
export function verifyToken(request: NextRequest): JWTPayload | null {
  try {
    const jwtToken = request.cookies.get("jwtToken");
    const token = jwtToken?.value as string;

    if (!token) {
      return null;
    }
    const privatekey = process.env.JWT_SECRET as string;
    const userPayload = jwt.verify(token, privatekey) as JWTPayload;
    return userPayload;
  } catch (error) {
    return null;
  }
}

//Verify Token From Page
export function verifyTokenforPage(token: string): JWTPayload | null {
  try {
    const privatekey = process.env.JWT_SECRET as string;
    const userPayload = jwt.verify(token, privatekey) as JWTPayload;

    if (!userPayload) return null;
    return userPayload;
  } catch (error) {
    return null;
  }
}
