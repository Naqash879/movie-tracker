import Link from "next/link";

export default function MovieCard({ ...props }) {
  return (
    <div>
      <Link href={`/moviedetail/`}>
        <img
          className="w-[158px] h-[234px] lg:w-[177px] lg:h-[263px] rounded-2xl flex-shrink-0"
          {...props}
        />
      </Link>
    </div>
  );
}
