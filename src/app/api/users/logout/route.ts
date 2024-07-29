import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
/**
 * @method Get
 * @route http://localhost:3000/api/users/logout
 * @desc login User ( Log In or Sign In )
 * @access public
 */

export function GET(request: NextRequest) {
  try {
    cookies().delete("jwtToken");
    return NextResponse.json({ massage: "logout" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { massage: "internal server error" },
      { status: 500 }
    );
  }
}
