import { Artcle } from "@/utils/type";

//components
import ActicleCard from "../../components/acticles/ActicleCard";
export default async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com//posts", {
    cache: "no-store",
  });
  const aritcles: Artcle[] = await response.json();

  if (!response.ok) {
    throw new Error("Failed To Fetch articles ");
  }
  return (
    <section className=" container m-auto px-5 ">
      <div className="flex items-center justify-center flex-wrap gap-7 ">
        {aritcles.map((item) => {
          return (
            <ActicleCard
              key={item.id}
              id={item.id}
              body={item.body}
              title={item.title}
            />
          );
        })}
      </div>
    </section>
  );
}
