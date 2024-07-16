import Link from "next/link";
import Header from "@/components/Header/Header";
import Hero from "@/components/home/Hero";
import WebHostingplan from "@/components/home/WebHostingplan";
export default function page() {
  return (
    <section>
      <Hero />
      <h2 className="text-center mt-10 text-3x1 font-bold">
        Choose your Web Hosting Plan
      </h2>
      <div className=" container m-auto flex justify-center items-center my-7 flex-wrap gap-5 md:gap-7">
        <WebHostingplan />
        <WebHostingplan />
        <WebHostingplan />
      </div>
    </section>
  );
}
