import { Article } from "@prisma/client";
import type { Metadata } from "next";
//components
import ArticleCard from "../../components/acticles/ArticleCard";
import SearchArticleInput from "../../components/acticles/SearchArticleInput";
import Pagination from "./Pagination";
import { getArticles, getArticlesCount } from "../apiCalls/articleApiCall";
import { ARTICLE_PER_PAGE } from "@/utils/constants";

interface ArticlePageNumber {
  searchParams: { pageNumber: string };
}

export const metadata: Metadata = {
  title: "Aritcles Page",
  description: "This is aritcles page",
};

export default async function page({ searchParams }: ArticlePageNumber) {
  const { pageNumber } = searchParams;

  const count: number = await getArticlesCount();
  const pages = Math.ceil(count / ARTICLE_PER_PAGE);

  let pageNumberhandle;
  if (parseInt(pageNumber) <= 0) {
    pageNumberhandle = 1;
  } else if (parseInt(pageNumber) > pages) {
    pageNumberhandle = pages;
  } else {
    pageNumberhandle = parseInt(pageNumber) as number;
  }

  const aritcles: Article[] = await getArticles(pageNumberhandle);

  return (
    <section className=" container m-auto px-5 mt-[10px]  ">
      <SearchArticleInput />
      <div className="flex items-center justify-center flex-wrap gap-7 lg:my-[100px]">
        {aritcles.map((item) => {
          return <ArticleCard key={item.id} article={item} />;
        })}
      </div>
      <Pagination
        pageNumber={pageNumberhandle}
        pages={pages}
        route={"/articles"}
      />
    </section>
  );
}
