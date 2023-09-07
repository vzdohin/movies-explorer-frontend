import React, {useState} from 'react';
import './Movies.css'
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';


function Movies({loggedIn}) {
  const [savedMovies, isSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedMoviesError, setSearchedMoviesError] = useState(false)
  return (
    <section className='movies'>
      <Header
        loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList 
      isLoading={isLoading} 
      searchedMoviesError={searchedMoviesError}
      savedMovies={savedMovies} />
      <Footer />
    </section>
  )

}

export default Movies;