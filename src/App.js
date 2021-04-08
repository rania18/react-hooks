import './App.css';
import React , { useState } from 'react'
import MovieList from './components/MovieList';
import MoviesData from './components/MoviesData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Add from './components/Add';
import Rating from './components/Rating';

function App() {
  const [movies , setMovies] = React.useState(MoviesData)
  const [search , setSearch] = React.useState("")
  const [newMovie, setNewMovie] = React.useState(
  {  title:"",
    description:"",
    Image:"",
    rate:"",}
  )
  const AddMovie = (newMovie) =>{
    setMovies(
      [...movies, newMovie]
    )
  }
  const [rate, setRate] = React.useState(1)
  return (
    <div className="App">
      
      <Menu  search={search} setSearch={setSearch}/>
      <Add AddMovie={AddMovie} newMovie={newMovie} setNewMovie={setNewMovie}/>
      <Rating rate={rate} setRate={setRate}/>
      <MovieList movies={movies} setMovies={setMovies} search={search} rate={rate} />
    </div>
  );
}

export default App;
