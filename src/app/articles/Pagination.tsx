const pages = [1, 2, 3, 4, 5];

export default function Pagination() {
  return (
    <div className=" flex items-center justify-center mt-2 mb-10">
      <div className="border border-[#405D72] text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition duration-150 ">
        Prev
      </div>
      {pages.map((page) => {
        return (
          <div
            key={page}
            className="border border-[#405D72] text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition duration-150 "
          >
            {page}
          </div>
        );
      })}
      <div className="border border-[#405D72] text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition duration-150 ">
        Next
      </div>
    </div>
  );
}
