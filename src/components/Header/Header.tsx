"use client";

import Link from "next/link";
//castum css file
import style from "./header.module.css";
//Component
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className=" fixed h-[100px] top-0 left-0 w-full z-200 transition-all duration-200 bg-red-900 ">
      <div
        className={
          " h-full flex items-center justify-between p-[0px_40px] border-b-[2px] border-solid  border-[#909090] bg-[#405D72] relative "
        }
      >
        <Navbar />
        <div className={style.right}>
          <Link className={style.btn} href={"/login"}>
            Login
          </Link>

          <Link className={style.btn} href={"/register"}>
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
