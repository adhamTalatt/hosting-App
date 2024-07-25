import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

import jwt from "jsonwebtoken";
import { JWTPayload } from "@/utils/type";

interface Props {
  params: { id: string };
}

/**
 * @method DELETE
 * @route http://localhost:3000/api/users/profile/:id
 * @desc Delet Profile
 * @access private
 */

export async function DELETE(requset: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!user) {
      return NextResponse.json({ massage: "user Not found" }, { status: 404 });
    }

    //  check user form token jwt

    const authToken = requset.headers.get("authToken") as string;

    if (!authToken) {
      return NextResponse.json(
        { massage: "not token provided ,acces denied" },
        { status: 401 }
      ); // 401 => unauthorized
    }

    const userFromToken = jwt.verify(
      authToken,
      process.env.JWT_SECRET as string
    ) as JWTPayload;

    if (userFromToken.id === user.id) {
      await prisma.user.delete({ where: { id: parseInt(params.id) } });
      return NextResponse.json(
        { massage: "your profile (account) has been deleted" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { massage: "only user himself can delete his profile m forbidden" },
      { status: 403 }
    ); // 403 => forbiddden
  } catch (error) {
    return NextResponse.json(
      { massage: "internal server error" },
      { status: 500 }
    );
  }
}
