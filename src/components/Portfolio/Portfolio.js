import React from 'react';
import Arrow from '../../images/arrow.svg'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://github.com/vzdohin/how-to-learn' target='_blank' rel="noreferrer">
              <p className='portfolio__text'>Статичный сайт</p>
              <img src={Arrow} alt='стрелка перехода на сайт' className='portfolio__img'></img>
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://github.com/vzdohin/russian-travel' target='_blank' rel="noreferrer">
              <p className='portfolio__text'>Адаптивный сайт</p>
              <img src={Arrow} alt='стрелка перехода на сайт' className='portfolio__img'></img>
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://github.com/vzdohin/react-mesto-api-full-gha' target='_blank' rel="noreferrer">
              <p className='portfolio__text'>Одностраничное приложение</p>
              <img src={Arrow} alt='стрелка перехода на сайт' className='portfolio__img'></img>
            </a>
          </li>
        </ul>
      </div>
    </section >
  )

}

export default Portfolio;