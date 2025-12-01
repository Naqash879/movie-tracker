function FormButton({ children, ...props }) {
  return (
    <button
      className="p-3 text-[25px] rounded-[20px] text-white border-t border-t-cyan-500 py-2  bg-[#37C6F3] mt-7"
      {...props}
    >
      {children}
    </button>
  );
}
export default FormButton;
