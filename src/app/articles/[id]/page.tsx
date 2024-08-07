import { Article } from "@prisma/client";
import AddCommentsForm from "@/components/comments/AddCommentsForm";
import CommentItem from "@/components/comments/CommentItem";
import { getSingleArticle } from "@/app/apiCalls/articleApiCall";
import { SingleAricle } from "@/utils/type";
import { cookies } from "next/headers";
import { verifyTokenforPage } from "@/utils/verifyToken";

interface SingleActiclePageProps {
  params: { id: string };
}

export default async function SingleActiclePage({
  params,
}: SingleActiclePageProps) {
  const aritcle: SingleAricle = await getSingleArticle(params.id);
  const token = cookies().get("jwtToken")?.value || "";
  const payLoad = verifyTokenforPage(token);
  return (
    <section className=" fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
      <div className="bg-white p-7 rounded-lg ">
        <h1 className="text-3xl font-bold text-gray-700 mb-2">
          {aritcle.title}
        </h1>
        <div className="text-gray-400">
          {new Date(aritcle.createdAt).toDateString()}
        </div>
        <p className="text-gray-800 text-xl mt-5">{aritcle.description}</p>
      </div>
      {payLoad ? <AddCommentsForm articleId={aritcle.id} /> : ""}

      <h4 className="text-xl text-gray-800 ps-1 font-semibold mb-2 mt-7">
        Comments
      </h4>
      {aritcle.comments.map((comment) => {
        return <CommentItem key={comment.id} comment={comment} />;
      })}
    </section>
  );
}
