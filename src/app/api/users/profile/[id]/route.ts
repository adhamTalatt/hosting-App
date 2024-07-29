import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";
import { UpdateUserDto } from "@/utils/dtos";
import bcrypt from "bcryptjs";

interface Props {
  params: { id: string };
}

/**
 * @method DELETE
 * @route http://localhost:3000/api/users/profile/:id
 * @desc Delet Profile
 * @access private
 */

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!user) {
      return NextResponse.json({ massage: "user Not found" }, { status: 404 });
    }

    const userFromToken = verifyToken(request);

    if (userFromToken !== null && userFromToken.id === user.id) {
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
      { massage: "internal server error from profile" },
      { status: 500 }
    );
  }
}

/**
 * @method GET
 * @route http://localhost:3000/api/users/profile/:id
 * @desc Get Profile By Id
 * @access private
 */

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
      select: {
        id: true,
        username: true,
        email: true,
        isAdmin: true,
        createdAt: true,
      },
    });
    if (!user) {
      return NextResponse.json({ massage: "user Not found" }, { status: 404 });
    }
    const userFromToken = verifyToken(request);

    if (userFromToken === null || userFromToken.id !== user.id) {
      return NextResponse.json(
        { massage: "you are not allowed, access denied" },
        { status: 403 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { massage: "internal server error " },
      { status: 500 }
    );
  }
}

/**
 * @method PUT
 * @route http://localhost:3000/api/users/profile/:id
 * @desc Upate Profile By Id
 * @access private
 */

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!user) {
      return NextResponse.json({ massage: "user Not found" }, { status: 404 });
    }

    const userFromToken = verifyToken(request);

    if (userFromToken === null || userFromToken.id !== user.id) {
      return NextResponse.json(
        { massage: "you are not allowed, access denied" },
        { status: 403 }
      );
    }

    const body = (await request.json()) as UpdateUserDto;

    if (body.password) {
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password, salt);
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(params.id) },
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
      select: {
        password: false,
      },
    });
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { massage: "internal server error " },
      { status: 500 }
    );
  }
}
