import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  return (
    <div className="text-center text-white p-4">
      {movie ? (
        <>
          <h2 className="text-2xl mb-2">{movie.title}</h2>
          <p className="mb-4">{movie.description}</p>
          <iframe
            width="560"
            height="315"
            src={movie.trailerURL}
            title={movie.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Link to="/" className="mt-4 inline-block text-blue-500">
            Back to Home
          </Link>
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieDescription;