import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { numberOfMovies, handleLoadMovie } from '../../utils/constants'


function MoviesCardList({
  savedMovies,
  allMovies,
  onMovieLike,
  onMovieDeleteLike,
  savedMoviesRoute,
}) {
  const { pathname } = useLocation();
  const renderAllMovies = allMovies ? allMovies.slice(0, numberOfMovies) : [];
  return (
    <>
      <section className='cards__container'>
        <ul className='cards'>
          {pathname === '/saved-movies' ? (
            <>
              {savedMovies.map(movie => (
                <MoviesCard
                  key={movie._id || movie.id}
                  movie={movie}
                  savedMovies={savedMovies}
                  onMovieLike={onMovieLike}
                  onMovieDeleteLike={onMovieDeleteLike}
                  savedMoviesRoute={savedMoviesRoute}
                />
              ))}
            </>
          ) : (
            <>
              {renderAllMovies.map(movie => (
                <MoviesCard
                  key={movie._id || movie.id}
                  movie={movie}
                  savedMovies={savedMovies}
                  onMovieLike={onMovieLike}
                />
              ))}
            </>
          )}
        </ul>
      </section>
      <div className='cards__button-container'>
        {pathname === '/movies' && allMovies.length > numberOfMovies
          ? <button
            className='cards__button'
            type='submit'
            onClick={handleLoadMovie}
          >Ещё</button>
          : ''}
      </div>
    </>
  )
}

export default MoviesCardList;
