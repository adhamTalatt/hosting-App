"use client";

import Link from "next/link";
//castum css file
import style from "./header.module.css";
//Component
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header
      className={
        "h-[100px] flex items-center justify-between p-[0px_40px] border-b-[4px] border-solid  border-[#909090] bg-[#e3e1e1] relative"
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
    </header>
  );
}
