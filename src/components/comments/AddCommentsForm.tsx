"use client";
import { useState } from "react";
import { toast } from "react-toastify";
export default function AddCommentsForm() {
  const [Text, setText] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (Text.trim().length <= 0) {
      return toast.error("Please write somrthing");
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
        value={Text}
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
