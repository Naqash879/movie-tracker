function MovieTrailer({ ...props }) {
  return (
    <iframe
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      {...props}
    />
  );
}
export default MovieTrailer;
