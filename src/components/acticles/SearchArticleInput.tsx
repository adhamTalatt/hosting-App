"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SearchArticleInput() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/articles/search?serchText=${searchText}`);
  };

  return (
    <form onSubmit={formSubmitHandler} className="my-5 w-full md:w-2/3 m-auto ">
      <input
        className="w-full p-3 rounded text-xl border-none text-gray-900 "
        type="search"
        placeholder="Search for article"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </form>
  );
}
