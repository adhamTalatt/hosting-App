import React from "react";
import Link from "next/link";

export default function ActicleCard({ id, body, title }) {
  return (
    <div
      key={id}
      className="p-5 rounded-lg shadow-lg border-2 border-gray-400 hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4 min-h-[220px] flex justify-center items-center "
    >
      <div>
        <h3 className=" text-xl font-bold text-gray-900 line-clamp-1">
          {title}
        </h3>
        <p className=" my-2 text-xl text-gray-700 p-1 line-clamp-2">{body}</p>
        <Link
          className=" text-xl bg-[#405D72] hover:bg-[#F7E7DC] hover:border-[#405D72] hover:text-[#405D72] border-[1px]   w-full block text-center p-1 text-white rounded-lg transition-all duration-200"
          href={`/articles/${id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
}