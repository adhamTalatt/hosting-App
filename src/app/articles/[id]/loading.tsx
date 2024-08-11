import React from "react";

import AddCommentsForm from "@/components/comments/AddCommentsForm";
export default function loading() {
  const articlesSkeletom = [1, 2, 3, 4, 5, 6];
  return (
    <section className=" fix-height container m-auto w-full px-5 pt-8 md:w-3/4 animate-pulse -z-10">
      <div className="bg-white p-7 rounded-lg ">
        <h1 className="  text-gray-500 h-6 mb-2 rounded-lg"></h1>
        <div className="text-gray-500 h-4 rounded-lg"></div>
        <p className="text-gray-500 h-6 text-xl mt-5 rounded-lg"></p>
      </div>
      <div className="mt-8">
        <div className="p-2 rounded-lg bg-gray-300 h-10"> </div>
        <button className=" bg-gray-300  mt-2 p-1 rounded-lg h-8 w-20"></button>
      </div>
    </section>
  );
}
