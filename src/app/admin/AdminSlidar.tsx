import Link from "next/link";
import { MdOutlineArticle } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";

export default function AdminSlidar() {
  return (
    <>
      <Link
        href={"/admin"}
        className="flex items-center mb-5 text-lg lg:text-2xl font-semibold"
      >
        <CgMenuGridR className="text-3xl me-1" />
        <span className="hidden lg:block">Dashboard</span>
      </Link>
      <ul className=" mt-10 flex items-center justify-center flex-col lg:items-start">
        <Link
          className="flex items-center justify-center text-xl mb-5 lg:border-b border-gray-300 hover:text-[#E88D67] transition duration-200 "
          href={"/admin/article-table"}
        >
          <MdOutlineArticle className="me-1" />
          <span className="hidden lg:block">Articles</span>
        </Link>
        <Link
          className="flex items-center justify-center text-xl mb-5 lg:border-b border-gray-300 hover:text-[#E88D67] transition duration-200 "
          href={"/admin/comments-table"}
        >
          <FaRegComment className="me-1" />
          <span className="hidden lg:block">Comments</span>
        </Link>
      </ul>
    </>
  );
}
