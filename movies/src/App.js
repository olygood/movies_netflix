import React from 'react';
import Header from './components/header/Header'
import MovieDetails from './components/movie-details/MovieDetails'
import MovieList from './components/movie-list/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex flex-row">
      <MovieList />
      <MovieDetails />
     
      </div>
     
    </div>
  );
}

export default App;
