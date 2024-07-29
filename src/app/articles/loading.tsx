const articlesSkeletom = [1, 2, 3, 4, 5, 6];

export default function loading() {
  return (
    <section className=" fix-height container m-auto px-5 mt-[10px] animate-pulse -z-10">
      <div className="my-5 w-full md:w-2/3 m-auto bg-gray-300 rounded">
        <div className="w-full p-3 rounded text-xl border-none text-gray-300 h-12"></div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-7 lg:my-[100px]">
        {articlesSkeletom.map((item) => {
          return (
            <div
              key={item}
              className="p-5 rounded-lg shadow-lg w-full md:w-2/5 lg:w-1/4 min-h-[220px] flex justify-center items-center  bg-gray-300"
            >
              <div>
                <h3 className="  bg-gray-300 line-clamp-1"></h3>
                <p className=" my-2  p-1 line-clamp-2"></p>
                <div className=" bg-gray-400 w-full block text-center p-1rounded-lg"></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-2 mb-10">
        {" "}
        <div className="border border-gray-400 py-1 px-3 h-8 w-8 "></div>
        {articlesSkeletom.map((page) => {
          return (
            <div
              key={page}
              className="border border-gray-400  py-1 px-3 h-8 w-8   "
            ></div>
          );
        })}
        <div className="border border-gray-400  py-1 px-3 h-8 w-8   "></div>
      </div>
    </section>
  );
}
