import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const MovieList = (props) => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  }

  return (
    <>
      <div className="movie-cards-wrapper">
        <div className="movie-cards" ref={ref}>
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
        <div className="button-scroll-left" onClick={() => scroll(-500)}><FaChevronLeft size={50} /></div>
        <div className="button-scroll-right" onClick={() => scroll(500)}><FaChevronRight size={50} /></div>
      </div>
    </>
  )
}

export default MovieList;