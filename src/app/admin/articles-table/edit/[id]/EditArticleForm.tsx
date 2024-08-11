"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { Article } from "@prisma/client";
interface EditArticleFormProps {
  article: Article;
}
export default function EditArticleForm({ article }: EditArticleFormProps) {
  const router = useRouter();
  const [inputvalue, setinputvalue] = useState({
    title: article.title,
    description: article.description,
  });

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputvalue.title.trim().length <= 0) {
      return toast.error("title is not Validate ");
    }
    if (inputvalue.description.trim().length <= 0) {
      return toast.error("descripton is not Validate ");
    }

    try {
      await axios.put(`${DOMAIN}/api/articles/${article.id}`, inputvalue);
      return toast.success("article updated");
      router.refresh();
    } catch (error: any) {
      toast.error(error?.response.data.massage);
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col ">
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="text"
        value={inputvalue.title}
        onChange={(e) => {
          setinputvalue({ ...inputvalue, title: e.target.value });
        }}
      />
      <textarea
        className="mb-4 p-2 lg:text-xl rounded resize-none"
        rows={5}
        value={inputvalue.description}
        onChange={(e) => {
          setinputvalue({ ...inputvalue, description: e.target.value });
        }}
      />
      <button
        type="submit"
        className="text-2xl text-white bg-green-800 hover:bg-green-900 transition duration-200 p-2 rounded-lg font-bold"
      >
        Edit Article
      </button>
    </form>
  );
}
