import { NextRequest, NextResponse } from "next/server";

const articles = [
  {
    id: 1,
    userId: 101,
    title: "typeScript",
    body: "typescrtip is a powerfull programming language",
  },
  {
    id: 2,
    userId: 102,
    title: "javascript",
    body: "javascript is a powerfull programming language",
  },
  {
    id: 3,
    userId: 103,
    title: " c++ ",
    body: " c++  is a powerfull programming language",
  },
];
export function GET(requset: NextRequest) {
  return NextResponse.json(articles, { status: 200 });
}
