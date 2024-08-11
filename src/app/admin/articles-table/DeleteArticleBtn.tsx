"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface DeleteArticleBtnProps {
  articleId: number;
}
const DeleteArticleBtn = ({ articleId }: DeleteArticleBtnProps) => {
  const router = useRouter();
  const DeleteBtnHandler = async () => {
    try {
      if (confirm("you want delete this article ,Are you sure?")) {
        await axios.delete(`http://localhost:3000/api/articles/${articleId}`);
        router.refresh();
        toast.success("article deleted");
      }
    } catch (error: any) {
      toast.error(error?.response.data.massage);
      console.log(error);
    }
  };
  return (
    <div
      onClick={DeleteBtnHandler}
      className="bg-red-600 text-white rounded-lg cursor-pointer inline-block text-center py-1 px-2 hover:bg-red-800 transition duration-200"
    >
      Delete
    </div>
  );
};

export default DeleteArticleBtn;
