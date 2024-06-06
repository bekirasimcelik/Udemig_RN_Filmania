import { Link } from "react-router-dom";

const Card = ({ movie, index }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="border shadow p-3 rounded-md hover:bg-zinc-100 cursor-pointer transition max-sm:flex max-md:gap-5"
    >
      <div className="relative">
        <img
          className="rounded w-full max-w-[450px] max-h-[300px] object-cover max-sm:max-h-[150px]"
          src={`https://picsum.photos/500/70${index}`}
          alt="poster"
        />
        <span className="absolute top-[-10px] right-[-10px] font-semibold bg-green-500 p-2 rounded-full text-white">
          {movie.rating}
        </span>
      </div>

      <div>
        <h3 className="font-bold text-2xl sm:text-lg mt-4 line-clamp-1">{movie.title}</h3>

        <div className="text-gray-400 gap-2">
          <p>{movie.year}</p>
          <p className="flex gap-2">
            {movie.genre.map((genre, i) => (
              <span key={i}>{genre}</span>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
