import React from 'react'
import './MovieCard.css'

const MovieCard = (props) => {
  let className = 'black'
  if (props.color === "yellow") {
    className = 'yellow'
  }

  return (
    <div className={`movie-card-${className}`}>
      <div className="movie-card-body">      
        <div className={`movie-card-text-${className}`}>
          <h2>{props.title}</h2>
          <p>Year: {props.year}</p>
        </div>
        <div class={`movie-card-button-${className}`}>
          <p>Add to Nominations</p>
        </div>
      </div>  
    </div>
  )
}

export default MovieCard;