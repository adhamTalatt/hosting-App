"use client";

import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

interface DeleteCommentBtnProps {
  commentId: number;
}
const DeleteCommentBtn = ({ commentId }: DeleteCommentBtnProps) => {
  const router = useRouter();
  async function deleteCommentBtnhandler() {
    try {
      if (confirm("you want to delete this comment ,Are you sure ?")) {
        await axios.delete(`${DOMAIN}/api/comments/${commentId}`);
        router.refresh();
        toast.success("Comment Deleted");
      }
    } catch (error: any) {
      toast.error(error?.response?.data.massage);
      console.log(error);
    }
  }

  return (
    <div
      onClick={deleteCommentBtnhandler}
      className="bg-red-600 text-white rounded-lg inline-block py-1 px-2 cursor-pointer hover:bg-red-800 transition duration-200"
    >
      Delete
    </div>
  );
};

export default DeleteCommentBtn;
