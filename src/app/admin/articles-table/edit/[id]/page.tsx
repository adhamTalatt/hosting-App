import { protectionAdminPage } from "@/app/admin/protectionAdminPage";
import axios from "axios";
import React from "react";
import { Article } from "@prisma/client";
import { getSingleArticle } from "@/app/apiCalls/articleApiCall";
import EditArticleForm from "./EditArticleForm";

interface editAricleIdProps {
  params: { id: string };
}
const editAricleId = async ({ params }: editAricleIdProps) => {
  protectionAdminPage();

  const aricle: Article = await getSingleArticle(params.id);

  try {
  } catch (error) {}
  return (
    <section className=" fix-height flex items-center justify-center px-5 lg:px-20">
      <div className=" shadow p-4 bg-purple-50 rounded w-full">
        <h2 className="text-2xl text-green-700 font-semibold mb-4">
          Edit Article
        </h2>
        <EditArticleForm article={aricle} />
      </div>
    </section>
  );
};

export default editAricleId;
