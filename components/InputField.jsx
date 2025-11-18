<<<<<<< HEAD
function InputField() {
  return (
    <input
      className="rounded-md w-[335px] ml-1 sm:w-[393px]
 h-[52.791046142578125] bg-[#D9D9D9]  placeholder-[#000000] pl-2 text-[20px] font-roboto focus:outline-none my-2 "
      placeholder="Username"
    />
  );
}
=======
function InputField({ ...props }) {
  return (
    <input
      className="w-full h-12 bg-[#D9D9D9] rounded-[20px] p-6 text-lg  focus:outline-none my-2
 placeholder:text-black placeholder:text-2xl"
      {...props}
    />
  );
}

>>>>>>> cd34a5f64e58ad8c27a34121821e5d98ef9b28e0
export default InputField;
