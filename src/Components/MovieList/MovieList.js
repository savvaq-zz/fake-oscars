import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div>
          <li>{movie.Title} {movie.Year}</li>
        </div>
      ))}
    </>
  )
}

export default MovieList;