import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="w-72 h-80 bg-slate-50 shadow-lg rounded-lg overflow-hidden flex flex-col items-center m-3 p-4">
      <img src={movie.posterURL} alt={movie.title} className="w-full h-36 rounded" />
      <div className="px-6 py-2">
        <Link to={`/movie/${movie.title}`} className="font-bold text-xl">
          {movie.title}
        </Link>
        <p className="text-black p-1 text-xs">{movie.description}</p>
        <div className="flex justify-between mt-2 mb-2">
          <span className="text-yellow-500">⭐ {movie.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;