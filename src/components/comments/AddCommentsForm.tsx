"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { DOMAIN } from "@/utils/constants";

interface AddCommintFormProp {
  articleId: number;
}
export default function AddCommentsForm({ articleId }: AddCommintFormProp) {
  const router = useRouter();
  const [text, setText] = useState("");

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length <= 0) return toast.error("Please write somrthing");
    try {
      await axios.post(`${DOMAIN}/api/comments`, { text, articleId });
      router.refresh();
      setText("");
    } catch (error: any) {
      toast.error(error?.response.data.massage);
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="block  gap-8 mt-[15px] md:flex"
    >
      <input
        className=" rounded-lg text-xl p-2 w-full bg-white focus:shadow-md"
        type="text"
        placeholder="Add commentc ..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        className=" bg-gray-700 text-white mt-2 p-1 text-xl rounded-lg hover:bg-green-900 transition duration-200 w-full md:w-auto"
      >
        Comment
      </button>
    </form>
  );
}
