"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { useRouter } from "next/navigation";

export default function AddArticleForm() {
  const router = useRouter();
  const [inputvalue, setinputvalue] = useState({ title: "", description: "" });

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputvalue.title.trim().length <= 0) {
      return toast.error("title is not Validate ");
    }
    if (inputvalue.description.trim().length <= 0) {
      return toast.error("descripton is not Validate ");
    }

    try {
      await axios.post(`${DOMAIN}/api/articles`, inputvalue);
      router.refresh();
      setinputvalue({ title: "", description: "" });
      return toast.success("Validate and New article added  ");
    } catch (error: any) {
      toast.error(error?.response?.data.massage);
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col ">
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="text"
        placeholder="Enter Artice Title"
        value={inputvalue.title}
        onChange={(e) => {
          setinputvalue({ ...inputvalue, title: e.target.value });
        }}
      />
      <textarea
        className="mb-4 p-2 lg:text-xl rounded resize-none"
        rows={5}
        placeholder="Enter Artice Description"
        value={inputvalue.description}
        onChange={(e) => {
          setinputvalue({ ...inputvalue, description: e.target.value });
        }}
      />
      <button
        type="submit"
        className="text-2xl text-white bg-blue-800 hover:bg-blue-900 transition duration-200 p-2 rounded-lg font-bold"
        // onClick={}
      >
        Add New Article
      </button>
    </form>
  );
}
