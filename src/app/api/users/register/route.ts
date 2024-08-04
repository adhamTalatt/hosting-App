import prisma from "@/utils/db";
import { RegisterUserDto } from "@/utils/dtos";
import { createRegisterUserSchema } from "@/utils/validtionShemas";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { setCookie } from "@/utils/generateToken";

/**
 * @method POST
 * @route http://localhost:3000/api/users/register
 * @desc Create New User
 * @access public
 */

export async function POST(requset: NextRequest) {
  try {
    const body: RegisterUserDto = await requset.json();

    const validation = createRegisterUserSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { massage: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const userEmail = await prisma.user.findUnique({
      where: { email: body.email },
    });

    //Make sure the email is not already in use
    if (userEmail) {
      return NextResponse.json(
        { message: "this user already registered" },
        { status: 400 }
      );
    }

    // hashPassword by bcryptjs
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(body.password, salt);

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        username: body.username,
        password: hashPassword,
      },
      select: {
        username: true,
        id: true,
        isAdmin: true,
      },
    });

    const cookie = setCookie({
      id: newUser.id,
      username: newUser.username,
      isAdmin: newUser.isAdmin,
    });

    return NextResponse.json(
      { ...newUser, massage: "Registered & Authenticated" },
      { status: 201, headers: { "Set-Cookie": cookie } }
    );
  } catch (error) {
    return NextResponse.json(
      { massage: "internal servar error" },
      { status: 500 }
    );
  }
}
