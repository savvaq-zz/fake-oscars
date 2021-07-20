import React from 'react';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = (props) => {
  return (
    <>
        <div className="movie-cards">
          {props.movies.map((movie, index) => (
            <MovieCard title={movie.Title} 
            year={movie.Year} 
            img={movie.Poster} 
            handleNominationClick={() => props.handleNominationClick(movie)}
            handleRemoveNominationClick={() => props.handleRemoveNominationClick(movie)}
            type={props.type}  
             />
            ))}
        </div>
    </>
  )
}

export default MovieList;