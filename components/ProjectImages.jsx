import Link from "next/link";

function ProjectImages({ ...props }) {
  return (
    <div className="w-[158px] h-[234px] lg:w-[177px] lg:h-[263px] overflow-hidden">
      <Link href={`/movie-detail/${props.id}`}>
        <img
          className="object-cover object-top w-full h-full  rounded-2xl shrink-0"
          {...props}
        />
      </Link>
    </div>
  );
}
export default ProjectImages;
