import { ComponentProps } from "react";

function InputField({ ...props }: ComponentProps<"input">) {
  return (
    <input
      className="rounded-md w-full h-[52.791046142578125] bg-[#D9D9D9] ml-1 placeholder-black pl-2 text-[20px] font-roboto focus:outline-none my-2 "
      {...props}
    />
  );
}

export default InputField;
