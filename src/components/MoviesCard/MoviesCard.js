import React from 'react';
import './MoviesCard.css'
import { useLocation } from 'react-router-dom';
import { convertorDuration } from '../../utils/constants'

function MoviesCard({
  movie,
  savedMovies,
  onMovieLike,
  onMovieDeleteLike
}) {
  const { pathname } = useLocation();

  const isSaved = savedMovies.find(
    (id) => id.movieId === movie.id
  ) || false;
  function handleClick() {
    onMovieLike(movie);
  }

  function handleDeleteCard() {
    onMovieDeleteLike(movie);
  }
  return (
    <li className='card'>
      <a href={movie.trailerLink} target='_blank' rel="noreferrer">
        <img
          className='card__image'
          alt={`Изображение ${movie.nameRU}`}
          src={`${movie.image.url === undefined
            ? movie.image
            : 'https://api.nomoreparties.co' + movie.image.url
            }`}></img>
      </a>
      <section className='card__container'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        {pathname === '/movies' && (
          <input
            type='checkbox'
            className='card__button'
            checked={isSaved}
            placeholder='none'
            onChange={handleClick}
          ></input>
        )}
        {pathname === '/saved-movies' && (
          <button
            className='card__button-delete'
            type='submit'
            onClick={handleDeleteCard}
          ></button>
        )}
      </section>
      <p className='card__duration'>{convertorDuration(movie.duration)}</p>
    </li>
  )
}

export default MoviesCard;
