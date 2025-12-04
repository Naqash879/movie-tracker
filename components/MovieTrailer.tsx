import { ComponentProps } from "react";

function MovieTrailer({ ...props }: ComponentProps<"iframe">) {
  return (
    <iframe
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      {...props}
    />
  );
}
export default MovieTrailer;
