"use client";
import Link from "next/link";
import style from "header.module.css";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LogoutBtn() {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      await axios.get(`${DOMAIN}/api/users/logout`);
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.warning("Sommething went wrong");
      console.log(error);
    }
  };
  return (
    <button
      className={"bg-gray-700 text-gray-200 px-1 rounded"}
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}
