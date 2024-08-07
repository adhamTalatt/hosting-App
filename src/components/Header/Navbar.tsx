"use client";
import Link from "next/link";
import style from "./header.module.css";
import { GrTechnology } from "react-icons/gr";

//react-icon
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

//React hooks
import { useState } from "react";
export default function Navbar() {
  const [togggle, setTogggle] = useState(false);
  return (
    <nav className={style.navbar}>
      <div>
        <Link href={"/"} className={style.Logo}>
          CLOUD
          <GrTechnology />
          HOSTING
        </Link>
        <div className={style.menuIcon}>
          {togggle ? (
            <MdClose
              onClick={() => {
                setTogggle((togggle) => !togggle);
              }}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <AiOutlineMenu
              onClick={() => {
                setTogggle((togggle) => !togggle);
              }}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
      </div>
      <div
        className={style.navLinksWrap}
        style={{
          clipPath:
            (togggle && " polygon(0 0, 100% 0, 100% 100%, 0 100%)") || "",
        }}
      >
        <ul className={style.navLinks}>
          <Link
            onClick={() => setTogggle(false)}
            className={style.navLink}
            href={"/"}
          >
            Home
          </Link>
          <Link
            onClick={() => setTogggle(false)}
            className={style.navLink}
            href={"/articles?pageNumber=1"}
          >
            Articles
          </Link>
          <Link
            onClick={() => setTogggle(false)}
            className={style.navLink}
            href={"/about"}
          >
            About
          </Link>
          <Link
            onClick={() => setTogggle(false)}
            className={style.navLink}
            href={"/admin"}
          >
            Admin Dashboard
          </Link>
        </ul>
      </div>
    </nav>
  );
}
