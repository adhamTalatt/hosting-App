import { NextRequest, NextResponse } from "next/server";
import { creatArticleSchena } from "@/utils/validtionShemas";
import { CreateArtileDto } from "@/utils/dtos";
import prisma from "@/utils/db";

const { v4: uuidv4 } = require("uuid");

/*
 * @method GET
 * @route http://localhost:3000/api/articles
 * @desc Get All Articles
 * @access public
 */

export async function GET(requset: NextRequest) {
  try {
    const articles = await prisma.article.findMany();
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { massage: "internal server error " },
      { status: 500 }
    );
  }
}

/**
 * @method POST
 * @route http://localhost:3000/api/articles
 * @desc Create New Article
 * @access public
 */

export async function POST(requset: NextRequest) {
  try {
    const body: CreateArtileDto = await requset.json();

    //  ----------- input validation with (zod) -----------
    //  ---------------------------------------------------

    //  import { creatArticleSchena } from "@/utils/validtionShemas";

    const validation = creatArticleSchena.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.issues[0].message, {
        status: 400,
      });
    }
    // ---------------------------------------------------------
    // ---------------------------------------------------------

    const newArticle = await prisma.article.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { massage: "internal server error " },
      { status: 500 }
    );
  }
}
