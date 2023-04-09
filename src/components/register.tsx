import { TEventChange, TEventSubmit } from "@/types";
import React, { useState } from "react";
import { CustomInput } from "./customInput";

export const Register = () => {
  const [form, setForm] = useState({ email: "", password: "", confirmpassword: "" });

  const handleChange: TEventChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit: TEventSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full gap-4 bg-pink-500"
    >
      <CustomInput name={"email"} type="email" value={form.email} onChange={handleChange} />
      <CustomInput
        name={"password"}
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <CustomInput
        name={"confirm Password"}
        type="password"
        value={form.password}
        onChange={handleChange}
      />
    </form>
  );
};
