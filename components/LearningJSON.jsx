const movies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genres: ["Action", "Sci-Fi"],
    poster: "",
    description:
      "A hacker learns about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    id: 2,
    title: "Spirited Away",
    year: 2001,
    rating: 8.6,
    genres: ["Animation", "Fantasy"],
    poster: "",
    description:
      "A young girl enters a world of spirits and must find a way to free her parents and return home.",
  },
  {
    id: 3,
    title: "Parasite",
    year: 2019,
    rating: 8.6,
    genres: ["Drama", "Thriller"],
    poster: "",
    description:
      "A poor family schemes to become employed by a wealthy family and infiltrate their household.",
  },
];

export default function MovieList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Movies</h2>
      <ul className="list-none p-0 m-0 space-y-3">
        {movies.map((m) => (
          <li
            key={m.id}
            className="flex gap-3 items-start p-3 border border-gray-200 rounded-lg bg-white"
          >
            <div>
              <h3 className="text-lg font-semibold mb-1">
                {m.title}{" "}
                <small className="text-gray-500 font-normal">({m.year})</small>
              </h3>
              <div className="text-sm text-gray-700">Rating: {m.rating}</div>
              <div className="text-sm text-gray-500 mt-1">
                {m.genres.join(", ")}
              </div>
              <p className="text-sm text-gray-700 mt-2 mb-0">{m.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
