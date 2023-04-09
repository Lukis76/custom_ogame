// "use client"
import { TEventChange } from "@/types";
import { FC, HTMLInputTypeAttribute } from "react";

type TCustomInput = {
  name: string;
  value: string;
  onChange: TEventChange;
  type: HTMLInputTypeAttribute;
};

export const CustomInput: FC<TCustomInput> = ({ name, onChange, value, type }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <label className="flex flex-col justify-center items-start pl-2 text-xl font-semibold text-white">
        {name.charAt(0).toUpperCase() + name.slice(1)}

        <input
          name={name.toLowerCase().trim().replace(" ", "")}
          value={value}
          type={type}
          onChange={onChange}
          className="font-normal text-black -ml-2 px-3 py-1 text-xl"
        />
        <span></span>
      </label>
    </div>
  );
};
