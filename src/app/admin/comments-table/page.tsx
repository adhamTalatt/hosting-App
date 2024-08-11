import React from "react";
import { protectionAdminPage } from "../protectionAdminPage";
import { Comment } from "@prisma/client";
import { cookies } from "next/headers";
import { getAllCommentAdmin } from "@/app/apiCalls/adminApiCall";
import DeleteCommentBtn from "./DeleteCommentBtn";
export default async function AdminCommentsPage() {
  protectionAdminPage();
  const token = cookies().get("jwtToken")?.value || "";
  const comments: Comment[] = await getAllCommentAdmin(token);

  return (
    <section className="p-5">
      <h1 className="mb-7 text-2xl font-semibold text-gray-700">Comments</h1>
      <table className="table w-full text-left">
        <thead className="border-t-2 border-b-2 border-gray-500 text-xl">
          <tr>
            <th className="p-2">Comment</th>
            <th className="hidden lg:inline-block p-3">created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id} className="border-b border-t border-gray-300">
              <td className="p-3 text-gray-700">{comment.text}</td>
              <td className="hidden lg:inline-block font-semibold text-gray-700 p-3">
                {new Date(comment.createdAt).toDateString()}
              </td>
              <td>
                <DeleteCommentBtn commentId={comment.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
