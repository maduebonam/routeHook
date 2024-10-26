import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import MovieDescription from './components/MovieDescription';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Fast Five",
      description: "Dominic Toretto and the crew race to Brazil and attempt a $100 million heist for their freedom, with a drug lord and a federal agent in hot pursuit..",
      posterURL: "https://occ-0-5541-1490.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXcdeLaQUQQkeinOF7cU1n25miT1sIA7Zv1ryYCPsPpsyR5clp9NEZC3QaRte4gYiq0ZWj2w2kT1OjPT4bfwN4DZqoMwHC997a1J.jpg?r=c18",
      rating: 7.0,
      trailerURL: "https://www.youtube.com/embed/uLpoPVLpG9E"
    },
    {
      title: "GET OUT",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "https://c8.alamy.com/comp/P4PETW/original-film-title-get-out-english-title-get-out-film-director-jordan-peele-year-2017-credit-universal-pictures-album-P4PETW.jpg",
      rating: 7.6,
      trailerURL: "https://www.youtube.com/embed/DzfpyUB60YY"
    },
  {
    title: "Fast and Furious",
    description: "Sent to England to stop a deadly bio-threat, US agent Luke Hobbs is forced to team up with his nemesis, mercenary Deckard Shaw.",
    posterURL: "https://occ-0-5541-1490.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYDDCo2vQHmh50QNN23P0tHbYQK8fmh8IxIuUQ-TfY7tThr29qPEBLOuI6GARs8a7XL_UzvTswXYM0fhnaoNge5W8F0Sb7-s4i3Q.jpg?r=64c",
    rating: 8.0,
    trailerURL: "https://www.youtube.com/embed/tbzb8cNfeeY"     
},
{
  title: "Drive",
  description: "A notorious thief allies with a street racer for a grand heist involving an elaborate game of deceit with authorities, who have their own dirty secrets.",
  posterURL: "https://occ-0-5541-1490.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWlTc_P_7yxmKXTTfieiOiOLLzadDcOi39AYPop_Aimt9AML8PQfvs2OIwfyQMwcLDQk4BQXgFR77C9yakfxKtNWb3wxtjoeCUCH.jpg?r=a81",
  rating: 8.6,
  trailerURL: "https://www.youtube.com/embed/Ci_TNoEUVJE"
},
{
  title: "Overhaul",
  description: "When truck racer Roger loses everything, he receives a tempting but dangerous offer: to work as the getaway driver for a gang of thieves.",
  posterURL: "https://occ-0-5541-1490.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABU7zZopHqsSclEzhD9VvI4tqxgQ9Z1zK8_ijdE8NQluL1ZNE9HmS3fJqGHHrOH324yWcnytBnGv0OASJbBdI-xy9g1BhScNsb1ZL.jpg?r=bbb",
  rating: 9.0,
  trailerURL: "https://www.youtube.com/embed/6vgLc_Goo4g"
},
    {     
       title: "Exorcist",
      description: "When passengers on a train are attacked by a creature, they must band together in order to survive until morning.",
      posterURL: "https://tvseans.az/uploads/thumbs/rs/CJO2ryIWIUt1-JhWPGJvU5lHv4CZG9Z8-186-278-resize.webp",
      rating: 9.6,
      trailerURL: "https://www.youtube.com/embed/7vBL364GH1E"      
    }    
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

 
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= (filterRating || 0)
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div className="App bg-gray-950">
        <h1 className="text-3xl text-slate-50 text-center my-2 pt-8">My Favorite Movies</h1>
        <Filter
          filterTitle={filterTitle}
          filterRating={filterRating}
          setFilterTitle={setFilterTitle}
          setFilterRating={setFilterRating}
        />
        <Routes>
          <Route path="/" element={
            <>
              <MovieList movies={filteredMovies} />
              <AddMovieForm addMovie={addMovie} />
            </>
          } />
          <Route path="/movie/:title" element={<MovieDescription movies={movies} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;