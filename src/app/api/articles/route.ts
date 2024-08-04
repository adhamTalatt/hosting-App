import { NextRequest, NextResponse } from "next/server";
import { creatArticleSchena } from "@/utils/validtionShemas";
import { CreateArtileDto } from "@/utils/dtos";
import prisma from "@/utils/db";
import { ARTICLE_PER_PAGE } from "@/utils/constants";
import { verifyToken } from "@/utils/verifyToken";

const { v4: uuidv4 } = require("uuid");

/*
 * @method GET
 * @route http://localhost:3000/api/articles
 * @desc Get All Articles
 * @access public
 */

export async function GET(requset: NextRequest) {
  try {
    // for Pagination --*
    const pageNumber = requset.nextUrl.searchParams.get("pageNumber") || "1";
    const articles = await prisma.article.findMany({
      skip: ARTICLE_PER_PAGE * (parseInt(pageNumber) - 1),
      take: ARTICLE_PER_PAGE,
    });
    //---*
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
 * @access private (only admin can create article)
 */

export async function POST(requset: NextRequest) {
  try {
    const user = verifyToken(requset);
    if (user === null || user.isAdmin === false) {
      return NextResponse.json(
        { massage: "only admin , access denied" },
        { status: 403 }
      );
    }

    const body: CreateArtileDto = await requset.json();

    //  ----------- input validation with (zod) -----------
    //  ---------------------------------------------------

    //  import { creatArticleSchena } from "@/utils/validtionShemas";

    const validation = creatArticleSchena.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { massage: validation.error.errors[0].message },
        { status: 400 }
      );
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
