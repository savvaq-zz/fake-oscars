import React from 'react'
import './MovieCard.css'

const MovieCard = (props) => {

  let buttonName = "Nominate"
  let buttonType = "regular"
  
  const action = () => {
    if(props.type === "favorite") {
      props.handleNominationClick();
      props.removeMovie();
    } else if (props.type === "SearchResults"){
      props.handleNominationClick();
      props.removeSearchResult();
    } else {
      props.handleRemoveNominationClick();
    }
  }

  if(props.type === "nomination") {
    buttonName = "Remove"
    buttonType = "clicked"
  }
  
  return (
    <div className="movie-card">
        <img src={props.img} alt="poster" className="movie-card-img" />          
        <div className="movie-card-text">
          <h2>{props.title}</h2>
          <p>Year: {props.year}</p>
        </div>
        <button onClick={action} className={`movie-card-button-${buttonType}`}>
          <span>{buttonName}</span>
        </button>
    </div>
  )
}

export default MovieCard;