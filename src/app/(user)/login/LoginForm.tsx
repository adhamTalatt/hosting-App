"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const [emailandpass, setEmailandpass] = useState({ email: "", pass: "" });
  const router = useRouter();
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const emailVal: boolean = ValidateEmail(emailandpass.email);
    const passVal: boolean = Validatepassword(emailandpass.pass);
    if (!emailVal) {
      return toast.error("Email is not Validate ");
    } else if (!passVal) {
      return toast.error("Password is not Validate ");
    } else {
      router.replace("/");
      return toast.success("Email and Password are Validate ");
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
        type="eamil"
        placeholder="Enter You Email"
        value={emailandpass.email}
        onChange={(e) => {
          setEmailandpass({ ...emailandpass, email: e.target.value });
        }}
      />
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="password"
        placeholder="Enter You Password"
        value={emailandpass.pass}
        onChange={(e) => {
          setEmailandpass({ ...emailandpass, pass: e.target.value });
        }}
      />
      <button
        type="submit"
        className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold"
        // onClick={}
      >
        Login
      </button>
    </form>
  );
}
