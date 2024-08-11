import { DOMAIN } from "@/utils/constants";
import { Comment } from "@prisma/client";

//get All Comments
export async function getAllCommentAdmin(token: string): Promise<Comment[]> {
  const resposne = await fetch(`${DOMAIN}/api/comments`, {
    headers: {
      Cookie: `jwtToken=${token}`,
    },
  });
  if (!resposne.ok) {
    throw new Error("Failed to fexh comments");
  }
  return resposne.json();
}
