import { Article } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";
import { SingleAricle } from "@/utils/type";

// Get articles based on pageNumber
export async function getArticles(
  pageNumber: string | number | undefined
): Promise<Article[]> {
  const response = await fetch(
    `${DOMAIN}/api/articles?pageNumber=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error("Failed To Fetch articles ");
  }

  return response.json();
}
//========================================================================================
//get articles count from db
export async function getArticlesCount() {
  const response = await fetch(`${DOMAIN}/api/articles/count`);

  if (!response.ok) {
    throw new Error("Failed To get articles count ");
  }

  const { count } = (await response.json()) as { count: number };

  return count;
}
//========================================================================================
// Get articles based on search
export async function getArticlesBasedOnSearch(
  searchText: string
): Promise<Article[]> {
  const response = await fetch(
    `${DOMAIN}/api/articles/search?searchText=${searchText}`
  );

  if (!response.ok) {
    throw new Error("Failed To Fetch articles ");
  }

  return response.json();
}
//=============================================================================================
// Get single article by id
export async function getSingleArticle(
  articleId: string
): Promise<SingleAricle> {
  const response = await fetch(`${DOMAIN}/api/articles/${articleId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed To Fetch articles ");
  }
  return response.json();
}
