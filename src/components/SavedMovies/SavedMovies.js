import React from 'react';
import './SavedMovies.css'
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';


function SavedMovies({loggedIn, savedMovies}) {
  return (
    <section className='saved-movies'>
      <Header
        loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList 
        savedMovies={savedMovies}
      />
      <Footer />
    </section>
  )

}

export default SavedMovies;