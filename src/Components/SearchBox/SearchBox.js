import React from 'react';
import './SearchBox.css'

const SearchBox = () => {
  return (
    <div className="homepage-search">
      <h2>Find a Movie to Nominate</h2>
      <form className="homepage-search-form"action="/" method="get">  
        <input className="homepage-search-box"
          type="text"
          id="search-box"
          placeholder="Titanic" 
        />
        <button className="homepage-search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBox;