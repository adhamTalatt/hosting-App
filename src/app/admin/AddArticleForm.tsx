"use client";
import { useState } from "react";
import { toast } from "react-toastify";
export default function AddArticleForm() {
  const [inputvalue, setinputvalue] = useState({ title: "", descripton: "" });

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputvalue.title.trim().length <= 0) {
      return toast.error("title is not Validate ");
    } else if (inputvalue.descripton.trim().length <= 0) {
      return toast.error("descripton is not Validate ");
    } else {
      return toast.success("title and descripton are Validate ");
    }

    console.log();
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
        value={inputvalue.descripton}
        onChange={(e) => {
          setinputvalue({ ...inputvalue, descripton: e.target.value });
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
