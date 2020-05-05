import React, { Component } from 'react';
import MoviesList from './MoviesList';
import './App.css';

const moviesData = [
  { 'hasOscars': false, 'title': 'The Shawshank Redemption', 'director': 'Frank Darabont', 'rate': '9.3', 'id': 0 },
  { 'hasOscars': true, 'title': 'The Godfather', 'director': 'Francis Ford Coppola', 'rate': '9.2', 'id': 1 },
  { 'hasOscars': true, 'title': 'The Godfather: Part II', 'director': 'Francis Ford Coppola', 'rate': '9.0', 'id': 2 },
  { 'hasOscars': true, 'title': 'The Dark Knight', 'director': 'Christopher Nolan', 'rate': '9.0', 'id': 3 },
  { 'hasOscars': false, 'title': '12 Angry Men', 'director': 'Sidney Lumet', 'rate': '8.9', 'id': 4 }
];

class App extends Component {

  state = {
    movies: moviesData
  }

  addMovie = () => {
    const newMovie = { 'hasOscars': true, 'title': 'Interstellar', 'director': 'Christopher Nolan', 'rate': '8.6', 'id': 31 };
    // const moviesCopy = this.state.movies.slice();
    // moviesCopy.push(newMovie);
    this.setState({
      // movies: moviesCopy
      movies: this.state.movies.concat(newMovie)
    })
  }

  render() {
    // const movieListItems = this.state.movies.map((movie, idx) => (<li key={movie.id} >{movie.title}</li>));

    return (
      <div className='App'>
        <h1>Movies</h1>
        {/* <ul>{movieListItems}</ul> */}
        <button onClick={this.addMovie}>Add a movie</button>
        {this.state.movies.length === 0 && <h2> No movies here</h2>}

        <MoviesList movies={this.state.movies} />
      </div >
    );
  }
}

export default App;