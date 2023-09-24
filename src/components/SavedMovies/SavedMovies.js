import React, { useEffect, useState } from 'react';
import './SavedMovies.css'
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import { filterMovies, filterShortMovies } from '../../utils/utils'


function SavedMovies({
  loggedIn,
  savedMovies,
  onMovieDeleteLike,
  onMovieLike,
  onFilteredSavedMovies,
  filteredSavedMovies,
}) {
  const [querySavedMovie, setQuerySavedMovie] = useState('');
  const [isShortSavedMovie, setIsShortSavedMovie] = useState(false);

  useEffect(() => {
    let filteredMovies = [...savedMovies];
    if (querySavedMovie) {
      filteredMovies = filterMovies(filteredMovies, querySavedMovie);
    }
    if (isShortSavedMovie) {
      filteredMovies = filterShortMovies(filteredMovies);
    }
    onFilteredSavedMovies(filteredMovies);
  }, [savedMovies, querySavedMovie, isShortSavedMovie, onFilteredSavedMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='saved-movies'>
        <SearchForm
          query={querySavedMovie}
          setQuery={setQuerySavedMovie}
          isShort={isShortSavedMovie}
          setIsShort={setIsShortSavedMovie}
        />
        <MoviesCardList
          savedMovies={filteredSavedMovies}
          onMovieDeleteLike={onMovieDeleteLike}
          onMovieLike={onMovieLike}
          savedMoviesRoute={true}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;