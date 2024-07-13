"use client";
import React from "react";
import Link from "next/link";

interface ErrorpagePorps {
  error: Error;
  reset: () => void;
}

export default function error({ error, reset }: ErrorpagePorps) {
  return (
    <div className="pt-7 text-center">
      <div className="text-3xl text-red-600 font-semibold">
        something went wrong
      </div>
      <h2 className=" text-gray-700 my-3 text-xl">
        Error Massage :- {error.message}
      </h2>
      <button
        onClick={() => reset()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Try again
      </button>
      <Link
        className="text-xl underline text-blue-700 block mt-6 cursor-pointer"
        href={"/"}
      >
        Go To Home page
      </Link>
    </div>
  );
}
