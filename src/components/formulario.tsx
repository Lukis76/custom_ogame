"use client";

import React, { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";

export const Formulario = () => {
  const [formulario, setFormulario] = useState<boolean>(false);
  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full">

      <button onClick={() => setFormulario((prev) => !prev)} className="px-4 py-2 bg-blue-800 font-extrabold text-xl w-full">Login</button>
      <button onClick={() => setFormulario((prev) => !prev)} className="px-4 py-2 bg-blue-800 font-extrabold text-xl w-full">Register</button>
      </div>
      <div>{formulario ? <Login /> : <Register />}</div>
    </div>
  );
};
