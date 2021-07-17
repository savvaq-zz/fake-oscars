import React from 'react';
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie-cards">
         <MovieCard title={movie.Title} year={movie.Year} color={props.color} />
        </div>
      ))}
    </>
  )
}

export default MovieList;