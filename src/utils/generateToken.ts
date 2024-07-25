import jwt from "jsonwebtoken";
import { JWTPayload } from "./type";

//@Todo -> generate JWT Token
export default function generateJWT(jwtPayload: JWTPayload): string {
  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
  return token;
}
