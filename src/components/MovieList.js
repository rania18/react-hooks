import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies, search, rate}) {
    return (
        <div className="list">
            {movies.filter(movie => ((movie.title.toLowerCase().trim().includes(search.toLowerCase().trim())))&& movie.rate>=rate).map(movie => <MovieCard movie={movie}/>) }
         
        </div>
    )
}

export default MovieList
