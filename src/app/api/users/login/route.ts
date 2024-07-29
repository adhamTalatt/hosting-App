import { LoginUserDto } from "@/utils/dtos";
import { loginUserSchema } from "@/utils/validtionShemas";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

import bcrypt from "bcryptjs";
import { setCookie } from "@/utils/generateToken";

/**
 * @method POST
 * @route http://localhost:3000/api/users/login
 * @desc login User ( Log In or Sign In )
 * @access public
 */

export async function POST(request: NextRequest) {
  try {
    const body: LoginUserDto = await request.json();
    const validation = loginUserSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { massage: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email: body.email } });

    if (!user) {
      return NextResponse.json(
        { massage: "invalid email or password ." },
        { status: 400 }
      );
    }

    const isPasswordMatch = await bcrypt.compare(body.password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { massage: "invalid email or password ." },
        { status: 400 }
      );
    }

    const cookie = setCookie({
      id: user.id,
      isAdmin: user.isAdmin,
      username: user.username,
    });

    return NextResponse.json(
      { massage: "Authenticated" },
      { status: 200, headers: { "Set-Cookie": cookie } }
    );
  } catch (error) {
    return NextResponse.json(
      { Massage: " Internale server error" },
      { status: 500 }
    );
  }
}
