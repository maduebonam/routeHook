import { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    trailerURL: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '', trailerURL: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 ">
      <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        className="border p-2 mb-2 w-full border-black rounded"
      />
      <input
        type="text"
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        className="border border-black p-2 mb-2 w-full rounded"
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        className="border border-black p-2 mb-2 w-full rounded"
      />
      <input
        type="number"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        className="border border-black p-2 mb-2 w-full rounded"
        min="0"
        max="10"
      />
      <input
        type="text"
        placeholder="Trailer URL"
        value={newMovie.trailerURL}
        onChange={(e) => setNewMovie({ ...newMovie, trailerURL: e.target.value })}
        className="border border-black p-2 mb-2 w-full rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;