import Link from "next/link";

interface PaginationProps {
  pages: number;
  pageNumber: number;
  route: string;
}
export default function Pagination({
  pages,
  pageNumber,
  route,
}: PaginationProps) {
  let pagesArray: number[] = [];
  for (let i = 1; i <= pages; i++) pagesArray.push(i);

  const prev = pageNumber - 1;
  const next = pageNumber + 1;

  return (
    <div className=" flex items-center justify-center mt-2 mb-10">
      {pageNumber !== 1 && (
        <Link
          href={`${route}?pageNumber=${prev}`}
          className="border border-[#405D72] text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition duration-150 "
        >
          Prev
        </Link>
      )}

      {pagesArray.map((page) => {
        return (
          <Link
            key={page}
            href={`${route}?pageNumber=${page}`}
            className={`${
              pageNumber === page ? "bg-gray-400" : ""
            } border border-[#405D72] text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition duration-150 `}
          >
            {page}
          </Link>
        );
      })}
      {pageNumber !== pages && (
        <Link
          href={`${route}?pageNumber=${next}`}
          className="border border-[#405D72] text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition duration-150 "
        >
          Next
        </Link>
      )}
    </div>
  );
}
