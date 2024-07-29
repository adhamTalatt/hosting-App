import { NextRequest, NextResponse } from "next/server";
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("Middlware is called");

  const jwtToken = request.cookies.get("jwtToken");
  const token = jwtToken?.value as string;

  if (!token) {
    return NextResponse.json(
      { massage: "not token provided ,acces denied middleware" },
      { status: 401 }
    ); // 401 => unauthorized
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/users/profile/:path*",
};

//
