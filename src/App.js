import React, { useState, useEffect } from 'react';
import './App.css'
import MovieList from './Components/MovieList/MovieList';
import HomepageHeading from './Components/HomepageHeading/HomepageHeading';
import Header from './Components/Header/Header';
import SearchBox from './Components/SearchBox/SearchBox';
import Footer from './Components/Footer/Footer';

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
      "Title": "Home Alone",
      "Year": "1990",
      "imdbID": "tt0099785",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      "Title": "Cast Away",
      "Year": "2000",
      "imdbID": "tt0162222",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg"
    },
    {
      "Title": "Saw",
      "Year": "2004",
      "imdbID": "tt0387564",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzQ2ZTBhNmEtZDBmYi00ODU0LTgzZmQtNmMxM2M4NzM1ZjE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"
    },
    {
      "Title": "The Mask",
      "Year": "1994",
      "imdbID": "tt0110475",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWExYjI5MzktNTRhNi00Nzg2LThkZmQtYWVkYjRlYWI2MDQ4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "The Green Mile",
      "Year": "1999",
      "imdbID": "tt0120689",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg"
    },
    {
      "Title": "Forrest Gump",
      "Year": "1994",
      "imdbID": "tt0109830",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "The Beach",
      "Year": "2000",
      "imdbID": "tt0163978",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTljZTUzYWUtOTI4YS00NmZlLWE5MmQtZjFlZDZhNjg4MjQxXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg"
    },
  ]);

  const [nominations, setNominations] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const addToNominations = (nomination) => {
    if(nominations.includes(nomination) === false) {
      const newNominationsList = [...nominations, nomination]
      setNominations(newNominationsList);
    }
  }

  const removeNomination = (nomination) => {
    const newNominationsList = nominations.filter(item => item !== nomination)
    setNominations(newNominationsList); 
  }

  const removeSearchResult = (searchResult) => {
    const newSearchResultsList = searchResults.filter(item => item !== searchResult)
    setSearchResults(newSearchResultsList); 
  }

  const removeMovie = (movie) => {
    const newMoviesList = movies.filter(item => item !== movie)
    setMovies(newMoviesList); 
  }


  const searchMovies = async (search) => {
    const url = `https://www.omdbapi.com/?apikey=df39bfa7&s=${search}`
    const response = await fetch(url);
    const responseJson = await response.json();
    
    if(responseJson.Search) {
      setSearchResults(responseJson.Search)
    }
  }

  useEffect(() => {
    searchMovies(searchValue);
  }, [searchValue])

  return <div>
    <Header />
    <SearchBox search={searchValue} setSearch={setSearchValue} />
    <MovieList movies={searchResults} removeSearchResult={removeSearchResult} handleNominationClick={addToNominations} type="SearchResults" />
    <HomepageHeading name="Fan Favorites" />
    <MovieList movies={movies} removeMovie={removeMovie} handleNominationClick={addToNominations} type="favorite" />
    <HomepageHeading name="Nominations"/>
    <MovieList movies={nominations} handleRemoveNominationClick={removeNomination} type="nomination" />
    <Footer />
  </div>
}

export default App