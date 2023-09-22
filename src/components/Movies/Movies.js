/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './Movies.css'
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import { filterMovies, filterShortMovies } from '../../utils/utils'
import Preloader from '../Preloader/Preloader';
import { getBeatfilmMovies } from '../../utils/MoviesApi'

function Movies({
  loggedIn,
  searchedMoviesError,
  savedMovies,
  filteredMovies,
  onFilteredMovies,
  onMovieLike,
  onMovieDeleteLike,
}) {
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const [isShort, setIsShort] = useState(JSON.parse(localStorage.getItem('isShort')) || false);
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedMovies = localStorage.getItem('filteredMovies');
    if (savedMovies) {
      onFilteredMovies(JSON.parse(savedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('query', query);
  }, [query]);

  useEffect(() => {
    localStorage.setItem('isShort', isShort);
  }, [isShort]);

  const fetchBeatfilmMovies = async () => {
    setIsLoading(true);
    try {
      const moviesData = await getBeatfilmMovies();
      setAllMovies(moviesData);
      localStorage.setItem('movies', JSON.stringify(moviesData));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchBeatfilmMovies();
    }
  }, [query]);

  useEffect(() => {
    let movies = [...allMovies];
    if (query) {
      movies = filterMovies(movies, query);
    }
    if (isShort) {
      movies = filterShortMovies(movies);
    }

    onFilteredMovies(movies);
    localStorage.setItem('filteredMovies', JSON.stringify(movies));
  }, [allMovies, query, isShort, onFilteredMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='movies'>
        <SearchForm
          query={query}
          setQuery={setQuery}
          isShort={isShort}
          setIsShort={setIsShort}
        />
        {query && (
          isLoading ? (
            <Preloader />
          ) : searchedMoviesError ? (
            <p className='movies__text'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
          ) : filteredMovies.length === 0 ? (
            <p className='movies__text'>Ничего не найдено</p>
          ) : (
            <MoviesCardList
              isLoading={isLoading}
              searchedMoviesError={searchedMoviesError}
              savedMovies={savedMovies}
              allMovies={filteredMovies}
              onMovieLike={onMovieLike}
              onMovieDeleteLike={onMovieDeleteLike}
            />
          )
        )}
      </main>
      <Footer />
    </>
  )
}

export default Movies;
