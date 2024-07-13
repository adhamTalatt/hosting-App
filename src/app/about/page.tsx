import CloudImage from "../../../public/cloud-hosting-removebg-preview.png";
import Image from "next/image";
export default function page() {
  return (
    <section className="fix-height container m-auto">
      <h1 className="text-3xl font-bold text-gray-800 p-5">About Page</h1>
      <Image src={CloudImage} alt="cloud" width={500} height={500} priority />
    </section>
  );
}
