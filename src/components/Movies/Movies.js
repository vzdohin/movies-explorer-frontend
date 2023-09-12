import React, { useState } from 'react';
import './Movies.css'
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';


function Movies({ loggedIn }) {
  const [savedMovies] = useState([]);
  const [isLoading] = useState(false);
  const [searchedMoviesError] = useState(false)
  return (
    <>
      <Header
        loggedIn={loggedIn} />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList
          isLoading={isLoading}
          searchedMoviesError={searchedMoviesError}
          savedMovies={savedMovies} />
      </main>
      <Footer />
    </>
  )

}

export default Movies;