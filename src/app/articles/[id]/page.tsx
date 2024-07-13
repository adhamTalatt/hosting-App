import { request } from "http";

import { Artcle } from "@/utils/type";

interface SingleActiclePageProps {
  params: { id: string };
}

export default async function SingleActiclePage({
  params,
}: SingleActiclePageProps) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com//posts/${params.id}`
  );
  const aritcle: Artcle = await response.json();
  if (!response.ok) {
    throw new Error("Failed To Fetch articles ");
  }
  return (
    <section className=" fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
      <div className="bg-white p-7 rounded-lg ">
        <h1 className="text-3xl font-bold text-gray-700 mb-2">
          {aritcle.title}
        </h1>
        <div className="text-gray-400">1/1/2024</div>
        <p className="text-gray-800 text-xl mt-5">{aritcle.body}</p>
      </div>
    </section>
  );
}