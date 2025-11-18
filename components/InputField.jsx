function InputField({ ...props }) {
  return (
    <input
      className="w-full h-12 bg-[#D9D9D9] rounded-[20px] p-6 text-lg  focus:outline-none my-2
 placeholder:text-black placeholder:text-2xl"
      {...props}
    />
  );
}

export default InputField;
