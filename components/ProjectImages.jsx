import Link from "next/link";

function MovieCard({ ...props }) {
  return (
    <div>
      <Link href={`/movie-detail/`}>
        <img
          className="w-[158px] h-[234px] lg:w-[177px] lg:h-[263px] rounded-2xl shrink-0"
          {...props}
        />
      </Link>
    </div>
  );
}
export default MovieCard;
