import React from "react";
interface serchTextArticlePageProp {
  searchParams: { serchText: string };
}
export default function SearchArticlePagr({
  searchParams,
}: serchTextArticlePageProp) {
  console.log(searchParams);
  return (
    <section className="fix-height container m-auto px-5">
      SearchArticlePagr = {searchParams.serchText}
    </section>
  );
}
