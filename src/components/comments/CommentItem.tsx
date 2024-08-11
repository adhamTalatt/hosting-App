"use client";

import { CommentWithUser } from "@/utils/type";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateCommentModel from "./UpdateCommentModel";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { DOMAIN } from "@/utils/constants";

interface CommItemProps {
  comment: CommentWithUser;
  userId: number | undefined;
}
export default function CommentItem({ comment, userId }: CommItemProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const commentDeleteHandle = async () => {
    try {
      if (confirm("You want delete this comment , Are you sur?")) {
        await axios.delete(`${DOMAIN}/api/comments/${comment.id}`);
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error?.response?.data.massage);
      console.log(error);
    }
  };

  return (
    <div className="mt-5 rounded-lg p-3 bg-gray-200 border-2 border-gray-300 last:mb-3">
      <div className="flex items-center justify-between md-2">
        <strong className="text-gray-800 uppercase">
          {comment.user.username}
        </strong>
        <span className="bg-white px-1 rounded-lg text-wrap">
          {new Date(comment.createdAt).toDateString()}
        </span>
      </div>
      <p>{comment.text}</p>
      {userId && userId === comment.userId && (
        <div className=" flex justify-end items-center">
          <FaEdit
            onClick={(even) => {
              setOpen(true);
            }}
            className="text-green-600 text-xl cursor-pointer me-3"
          />
          <FaTrash
            onClick={commentDeleteHandle}
            className="text-red-600 text-xl cursor-pointer"
          />
        </div>
      )}
      {open && (
        <UpdateCommentModel
          setOpen={setOpen}
          commentId={comment.id}
          text={comment.text}
        />
      )}
    </div>
  );
}
