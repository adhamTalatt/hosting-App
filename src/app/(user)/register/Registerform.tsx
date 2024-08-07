"use client";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import BtnSpinner from "@/components/home/BtnSpinner";
import { useRouter } from "next/navigation";

export default function Registerform() {
  const router = useRouter();

  const [RegisterInputs, setRegisterInputs] = useState({
    username: "",
    email: "",
    password: "",
    checkPass: "",
  });

  const [loading, setLoading] = useState(false);

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailVal: boolean = ValidateEmail(RegisterInputs.email);
    const passVal: boolean = Validatepassword(RegisterInputs.password.trim());
    if (RegisterInputs.username.trim() === "") {
      return toast.error("User Name is not Validate ");
    }
    if (!emailVal) {
      return toast.error("Email is not Validate ");
    }
    if (!passVal) {
      return toast.error("Password is not Validate ");
    }
    if (RegisterInputs.password !== RegisterInputs.checkPass) {
      return toast.error("Password mismatch ");
    }

    try {
      setLoading(true);
      await axios.post(`${DOMAIN}/api/users/register`, RegisterInputs);
      router.replace("/");
      setLoading(false);
      router.refresh();
    } catch (error: any) {
      toast.error(error?.response?.data.massage);
      console.log(error);
      setLoading(false);
    }
  };

  function ValidateEmail(inputText: string) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }
  function Validatepassword(password: string) {
    var mailformat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var minNumberofChars = 8;
    var maxNumberofChars = 16;

    if (
      password.length < minNumberofChars ||
      password.length > maxNumberofChars
    ) {
      return false;
    }
    if (password.match(mailformat)) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col ">
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="text"
        placeholder="User Name"
        value={RegisterInputs.username}
        onChange={(e) => {
          setRegisterInputs({ ...RegisterInputs, username: e.target.value });
        }}
      />

      <input
        className="mb-4 border rounded p-2 text-xl"
        type="eamil"
        placeholder="Enter You Email"
        value={RegisterInputs.email}
        onChange={(e) => {
          setRegisterInputs({ ...RegisterInputs, email: e.target.value });
        }}
      />
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="password"
        placeholder="Enter You Password"
        value={RegisterInputs.password}
        onChange={(e) => {
          setRegisterInputs({ ...RegisterInputs, password: e.target.value });
        }}
      />
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="password"
        placeholder="Check form your Password "
        value={RegisterInputs.checkPass}
        onChange={(e) => {
          setRegisterInputs({ ...RegisterInputs, checkPass: e.target.value });
        }}
      />
      <button
        type="submit"
        className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold"
      >
        {loading ? <BtnSpinner /> : "Register"}
      </button>
    </form>
  );
}
