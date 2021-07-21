import React from 'react'
import './MovieCard.css'

const MovieCard = (props) => {

  let buttonName = "Nominate"
  let action = props.handleNominationClick

  if(props.type === "nomination") {
    buttonName = "Remove"
    action = props.handleRemoveNominationClick
  }
  return (
    <div className="movie-card">
        <img src={props.img} alt="poster" className="movie-card-img" />          
        <div className="movie-card-text">
          <h2>{props.title}</h2>
          <p>Year: {props.year}</p>
        </div>
        <button onClick={action} className="movie-card-button">
          <span>{buttonName}</span>
        </button>
    </div>
  )
}

export default MovieCard;