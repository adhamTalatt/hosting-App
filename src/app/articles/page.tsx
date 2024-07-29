import { Artcle } from "@/utils/type";
import type { Metadata } from "next";
//components
import ActicleCard from "../../components/acticles/ActicleCard";
import SearchArticleInput from "../../components/acticles/SearchArticleInput";
import Pagination from "./Pagination";

export const metadata: Metadata = {
  title: "Aritcles Page",
  description: "This is aritcles page",
};
export default async function page() {
  // await new Promise((resolve) => {
  // setTimeout(resolve, 3000);
  // });
  const response = await fetch("https://jsonplaceholder.typicode.com//posts");
  const aritcles: Artcle[] = await response.json();

  if (!response.ok) {
    throw new Error("Failed To Fetch articles ");
  }
  return (
    <section className=" container m-auto px-5 mt-[10px]  ">
      <SearchArticleInput />
      <div className="flex items-center justify-center flex-wrap gap-7 lg:my-[100px]">
        {aritcles.slice(0, 6).map((item) => {
          return (
            <ActicleCard
              key={item.id}
              id={item.id}
              body={item.body}
              title={item.title}
            />
          );
        })}
      </div>
      <Pagination />
    </section>
  );
}
