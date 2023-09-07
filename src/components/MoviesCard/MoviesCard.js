import React from 'react';
import './MoviesCard.css'
import CardImage from '../../images/card_img.svg'


function MoviesCard({savedMovies}) {
  return (
    <div className='card'>
      <img className='card__image' alt='постер подборки' src={CardImage}></img>
      <section className='card__container'>
        <h4 className='card__title'>33 слова о дизайне</h4>
        {savedMovies ? (
          <button className='card__button-delete'></button>
        ) : (

          <input type='checkbox' className='card__button'  ></input>
        )}
      </section>
      <p className='card__duration'>1ч42м</p>
    </div>
  )

}

export default MoviesCard;