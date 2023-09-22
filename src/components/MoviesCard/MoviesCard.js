import React, { useState }from 'react';
import './MoviesCard.css'
import CardImage from '../../images/card_image.png'


function MoviesCard({ savedMovies }) {
  // временное решение уникальности подписи карточки
  const [filteredMovies] = useState([]);
  return (
    <li className='card'>
      <img className='card__image' alt={`Изображение ${filteredMovies.name}`} src={CardImage}></img>
      <section className='card__container'>
        <h2 className='card__title'>33 слова о дизайне</h2>
        {savedMovies ? (
          <button className='card__button-delete' type='submit'></button>
        ) : (

          <input
            type='checkbox'
            className='card__button'
            placeholder='none'
          ></input>
        )}
      </section>
      <p className='card__duration'>1ч42м</p>
    </li>
  )

}

export default MoviesCard;