import { NextRequest, NextResponse } from "next/server";
import { updateArtileDto } from "@/utils/dtos";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";

interface Props {
  params: { id: string };
}

/**
 * @method GET
 * @route http://localhost:3000/api/articles/:id
 * @desc Get single aritcle By Id
 * @access public
 */

export async function GET(requset: NextRequest, { params }: Props) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        comments: {
          include: {
            user: {
              select: {
                username: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!article) {
      return NextResponse.json(
        { massage: "article not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { massage: "internal server error " },
      { status: 500 }
    );
  }
}
//==============================================================================================================
/**
 * @method PUT
 * @route http://localhost:3000/api/articles/:id
 * @desc Upadte aritcle By Id
 * @access private (only admin can update)
 */

export async function PUT(requset: NextRequest, { params }: Props) {
  try {
    const user = verifyToken(requset);
    if (user === null || user.isAdmin === false) {
      return NextResponse.json(
        { massage: "only admin , access denied" },
        { status: 403 }
      );
    }
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!article) {
      return NextResponse.json(
        { massage: "article not found" },
        { status: 404 }
      );
    }
    const body: updateArtileDto = await requset.json();
    const updateArtivle = await prisma.article.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body.title,
        description: body.description,
      },
    });
    return NextResponse.json(updateArtivle, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { massage: "internal server error " },
      { status: 500 }
    );
  }
}

//================================================================================================================

/**
 * @method DELETE
 * @route http://localhost:3000/api/articles/:id
 * @desc Delete aritcle By Id
 * @access private (only admin can update)
 */

export async function DELETE(requset: NextRequest, { params }: Props) {
  try {
    const user = verifyToken(requset);
    if (user === null || user.isAdmin === false) {
      return NextResponse.json(
        { massage: "only admin , access denied" },
        { status: 403 }
      );
    }
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        comments: true,
      },
    });
    if (!article) {
      return NextResponse.json(
        { massage: "article not found" },
        { status: 500 }
      );
    }
    // deleting the article
    await prisma.article.delete({
      where: { id: parseInt(params.id) },
    });
    // deleting the comments that belong to this article
    const commentIds: number[] = article?.comments.map((comment) => comment.id);
    await prisma.comment.deleteMany({
      where: { id: { in: commentIds } },
    });

    return NextResponse.json({ massage: "article Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { massage: "internal server error " },
      { status: 500 }
    );
  }
}
