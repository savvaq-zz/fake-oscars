import React, { useState, useEffect } from 'react';
import './App.css'
import MovieList from './Components/MovieList/MovieList';
import HomepageHeading from './Components/HomepageHeading/HomepageHeading';
import Header from './Components/Header/Header'
import SearchBox from './Components/SearchBox/SearchBox'

const App = () => {
  const [movies, setMovies] = useState([
    {
      "Title": "Titanic",
      "Year": "1997",
      "imdbID": "tt0120338",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
    {
      "Title": "Titanic II",
      "Year": "2010",
      "imdbID": "tt1640571",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxMjQ1MjA5Ml5BMl5BanBnXkFtZTcwNjIzNjg1Mw@@._V1_SX300.jpg"
    },
    {
      "Title": "Titanic - La",
      "Year": "2000",
      "imdbID": "tt0330994",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5MjcxODAwMV5BMl5BanBnXkFtZTcwMTk4OTMwMg@@._V1_SX300.jpg"
    },
  ]);

  return <div>
    <Header />
    <SearchBox />
    <HomepageHeading name="Fan Favorites"/>
    <MovieList movies={movies} />
    <HomepageHeading name="Nominations"/>
    <MovieList movies={movies} color="yellow" />
  </div>
}

export default App