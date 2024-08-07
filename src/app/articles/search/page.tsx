import { getArticlesBasedOnSearch } from "@/app/apiCalls/articleApiCall";
import { Article } from "@prisma/client";
import React from "react";
import ArticleCard from "@/components/acticles/ArticleCard";
interface serchTextArticlePageProp {
  searchParams: { serchText: string };
}

export default async function SearchArticlePage({
  searchParams: { serchText },
}: serchTextArticlePageProp) {
  const articles: Article[] = await getArticlesBasedOnSearch(serchText);
  console.log(articles);
  return (
    <section className="fix-height container m-auto px-5">
      {articles.length === 0 ? (
        <h2 className=" text-2xl font-bold text-gray-800 p-5">
          Articles based on
          <span className="ms-1 text-red-700 text-3xl font-bold mx-1">
            {serchText}
          </span>
          not found
        </h2>
      ) : (
        <>
          <h1 className=" text-2xl font-bold mb-2 mt-7 text{serchText}-gray-800">
            Articles based on
            <span className="ms-1 text-green-700 text-3xl font-bold">
              {serchText}
            </span>
          </h1>
          <div className=" flex items-center justify-center flex-wrap gap-7">
            {articles.map((item) => (
              <ArticleCard key={item.id} article={item} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
