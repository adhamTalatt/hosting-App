import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

/**
 * @method GET
 * @route http://localhost:3000/api/articles/count
 * @desc Get Articles Count
 * @access public
 */
export async function GET(request: NextRequest) {
  try {
    const count = await prisma.article.count();
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { massage: "internal server error " },
      { status: 500 }
    );
  }
}
