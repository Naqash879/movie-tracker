function MovieTrailer({ ...probs }) {
  return (
    <iframe
      src="https://www.youtube.com/embed/BmllggGO4pM"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      {...probs}
    />
  );
}
export default MovieTrailer;
