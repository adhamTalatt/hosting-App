import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <section className="flex justify-center items-center flex-col">
      <h1 className=" text-7xl text-gray-800 font-bold"> 404</h1>
      <p className="text-gray-500 text-3xl mt-2 mb-5">Page Not Found</p>
      <Link href={"/"} className="text-x1 underline text-blue-700">
        Go To Home Page
      </Link>
    </section>
  );
}
