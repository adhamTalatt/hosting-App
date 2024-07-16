"use client";
import { useState, useRef } from "react";
import { toast } from "react-toastify";

export default function Registerform() {
  const [RegisterInputs, setRegisterInputs] = useState({
    userName: "",
    email: "",
    pass: "",
    checkPass: "",
  });

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const emailVal: boolean = ValidateEmail(RegisterInputs.email);
    const passVal: boolean = Validatepassword(RegisterInputs.pass.trim());
    if (RegisterInputs.userName.trim() === "") {
      return toast.error("User Name is not Validate ");
    } else if (!emailVal) {
      return toast.error("Email is not Validate ");
    } else if (!passVal) {
      return toast.error("Password is not Validate ");
    } else if (RegisterInputs.pass !== RegisterInputs.checkPass) {
      return toast.error("Password mismatch ");
    } else {
      return toast.success("Create New Account ");
    }

    console.log({ em: emailVal, pass: passVal });
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
        value={RegisterInputs.userName}
        onChange={(e) => {
          setRegisterInputs({ ...RegisterInputs, userName: e.target.value });
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
        value={RegisterInputs.pass}
        onChange={(e) => {
          setRegisterInputs({ ...RegisterInputs, pass: e.target.value });
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
        Register
      </button>
    </form>
  );
}
