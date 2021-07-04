import React from 'react'
import './MovieCard.css'
import MovieList from '../MovieList/MovieList'

const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <div className="movie-card-body">      
        <div className="movie-card-text">
          <h2>Titanic</h2>
          <p>Year: 1994</p>
        </div>
        <div class="movie-card-button">
          <p>Add to Nominations</p>
        </div>
      </div>  
    </div>
  )
}

export default MovieCard;