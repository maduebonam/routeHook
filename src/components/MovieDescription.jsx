import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="p-4 text-center">
      <h2 className="text-3xl font-bold text-white">{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} className="w-full h-72 max-w-md mx-auto my-2 rounded" />
      <p className="text-white mb-4">{movie.description}</p> 
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title="Trailer"
        className="mx-auto rounded my-3"
        allowFullScreen
    ></iframe>    
      <button className="bg-blue-500 text-white my-2 p-2 rounded" onClick={() => navigate('/')} >
        Back to Home
      </button>
    </div>
  );
};

export default MovieDescription;