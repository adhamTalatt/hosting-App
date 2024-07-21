import AddArticleForm from "./AddArticleForm";

export default function page() {
  return (
    <div className=" fix-height flex items-center justify-center px-5 lg:px-20">
      <div className="shadow p-4 bg-[#F7E7DC] rounded w-full ">
        <h2 className="text-xl lg:text-2xl text-gray-700 font-semibold mb-4 ">
          Add New Article
        </h2>
        <AddArticleForm />
      </div>
    </div>
  );
}
