import { CommentWithUser } from "@/utils/type";
import { FaEdit, FaTrash } from "react-icons/fa";

interface CommItemProps {
  comment: CommentWithUser;
}
export default function CommentItem({ comment }: CommItemProps) {
  return (
    <div className="mt-5 rounded-lg p-3 bg-gray-200 border-2 border-gray-300">
      <div className="flex items-center justify-between md-2">
        <strong className="text-gray-800 uppercase">
          {comment.user.username}
        </strong>
        <span className="bg-white px-1 rounded-lg text-wrap">
          {new Date(comment.createdAt).toDateString()}
        </span>
      </div>
      <p>{comment.text}</p>
      <div className=" flex justify-end items-center">
        <FaEdit className="text-green-600 text-xl cursor-pointer me-3" />
        <FaTrash className="text-red-600 text-xl cursor-pointer" />
      </div>
    </div>
  );
}
