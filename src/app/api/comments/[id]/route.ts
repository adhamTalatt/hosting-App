import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/verifyToken";
import prisma from "@/utils/db";
import { UpdateCommentDto } from "@/utils/dtos";
import { MdAssessment } from "react-icons/md";

interface Props {
  params: { id: string };
}
/**
 * @method PUT
 * @route http://localhost:3000/api/comments/:id
 * @desc Update comment
 * @access private (only owner of the comment)
 */

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!comment) {
      return NextResponse.json(
        { massage: "comment not Found " },
        { status: 404 }
      );
    }
    const user = verifyToken(request);
    if (user === null || user.id !== comment.userId) {
      return NextResponse.json(
        { massage: "only logged in user, access denied" },
        { status: 400 }
      );
    }

    const body = (await request.json()) as UpdateCommentDto;

    const updateCommet = await prisma.comment.update({
      where: { id: parseInt(params.id) },
      data: {
        text: body.text,
      },
    });
    return NextResponse.json(updateCommet, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { masssage: "internal servar error" },
      { status: 500 }
    );
  }
}

/**
 * @method DELETE
 * @route http://localhost:3000/api/comments/:id
 * @desc Delete Comment
 * @access private (only admin OR owner of the comment)
 */

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!comment) {
      return NextResponse.json(
        { massage: "comment not Found " },
        { status: 404 }
      );
    }
    const user = verifyToken(request);
    if (user === null) {
      return NextResponse.json(
        { massage: "only logged in user, access denied" },
        { status: 401 }
      );
    }

    if (user.isAdmin || user.id === comment.userId) {
      await prisma.comment.delete({
        where: { id: parseInt(params.id) },
      });
      return NextResponse.json({ massage: "comment deleted" }, { status: 200 });
    }

    return NextResponse.json(
      { massage: "you are not allowed ,access denied" },
      { status: 403 }
    );
  } catch (error) {
    return NextResponse.json(
      { massage: "internal servar error" },
      { status: 500 }
    );
  }
}
