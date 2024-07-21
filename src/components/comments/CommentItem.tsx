import { FaEdit, FaTrash } from "react-icons/fa";

export default function CommentItem() {
  return (
    <div className="mt-5 rounded-lg p-3 bg-gray-200 border-2 border-gray-300">
      <div className="flex items-center justify-between md-2">
        <strong className="text-gray-800 uppercase">adham</strong>
        <span className="bg-white px-1 rounded-lg text-wrap">1/1/2024</span>
      </div>
      <p>Thanks for this article</p>
      <div className=" flex justify-end items-center">
        <FaEdit className="text-green-600 text-xl cursor-pointer me-3" />
        <FaTrash className="text-red-600 text-xl cursor-pointer" />
      </div>
    </div>
  );
}
