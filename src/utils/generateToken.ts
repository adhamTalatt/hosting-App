import jwt from "jsonwebtoken";
import { JWTPayload } from "./type";

import { serialize } from "cookie";

//@Todo -> generate JWT Token
export default function generateJWT(jwtPayload: JWTPayload): string {
  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
  return token;
}

// set cookie with jwt

export function setCookie(jwtPayload: JWTPayload): string {
  const token = generateJWT(jwtPayload);

  const cookie = serialize("jwtToken", token, {
    httpOnly: true,
    // deverlopment = http ,production = https
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    // seconds* minutes * hours * days
    maxAge: 60 * 60 * 24 * 30, //  (30 days)for Expiration cookies
  });

  return cookie;
}
