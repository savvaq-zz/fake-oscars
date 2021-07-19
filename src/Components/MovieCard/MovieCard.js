import React from 'react'
import './MovieCard.css'

const MovieCard = (props) => {

  return (
    <div className="movie-card">
        <img src={props.img} alt="poster" className="movie-card-img" />
        <div className="movie-card-text">
          <h2>{props.title}</h2>
          <p>Year: {props.year}</p>
        </div>
        <a onClick={props.click} className="movie-card-button"><span>Nominate</span></a>
    </div>
  )
  
}

export default MovieCard;