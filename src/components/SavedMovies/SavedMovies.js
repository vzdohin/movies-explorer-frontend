import React from 'react';
import './SavedMovies.css'
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';


function SavedMovies({ loggedIn, savedMovies }) {
  return (
    <>
      <Header
        loggedIn={loggedIn} />
      <main className='saved-movies'>
        <SearchForm />
        <MoviesCardList
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  )

}

export default SavedMovies;