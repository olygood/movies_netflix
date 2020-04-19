import React, { Component } from 'react';
import Header from './components/header/Header'
import MovieList from './components/movie-list/MovieList';
import MovieDetails from './components/movie-details/MovieDetails'



class App extends Component {
  render(){
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-4">
        <MovieList />
        <MovieDetails />
       
        </div>
       
      </div>
    );
  }

}

export default App;
