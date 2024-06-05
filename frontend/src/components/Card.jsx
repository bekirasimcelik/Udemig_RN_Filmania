const Card = ({ movie }) => {
  return (
    <div className="border p-2 rounded-md">
      <div>
        <img
          src="https://picsum.photos/id/237/200/300"
          alt="poster"
        />
        <span className="font-semibold bg-green-500 p-1 rounded-full text-white">{movie.rating}</span>
      </div>

      <h3 className="font-bold mt-4">{movie.title}</h3>

      <div className="text-gray-400 gap-2">
        <p>{movie.year}</p>
        <p className="flex gap-2">{movie.genre.map((genre) => <span>{genre}</span>)}</p>
      </div>
    </div>
  );
};

export default Card;
