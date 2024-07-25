import { NextRequest, NextResponse } from "next/server";
import { updateArtileDto } from "@/utils/dtos";
import prisma from "@/utils/db";

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
 * @access public
 */

export async function PUT(requset: NextRequest, { params }: Props) {
  try {
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
 * @access public
 */

export async function DELETE(requset: NextRequest, { params }: Props) {
  try {
    const article = prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { massage: "article not found" },
        { status: 500 }
      );
    }
    await prisma.article.delete({
      where: { id: parseInt(params.id) },
    });
    return NextResponse.json({ massage: "article Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { massage: "internal server error " },
      { status: 500 }
    );
  }
}
