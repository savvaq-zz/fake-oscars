import React from 'react';
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';

const MovieList = (props) => {
  return (
    <>
        <div className="movie-cards">
          {props.movies.map((movie, index) => (
            <MovieCard title={movie.Title} year={movie.Year} color={props.color} img={movie.Poster} />
            ))}
        </div>
    </>
  )
}

export default MovieList;