import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__caption'>
          <p className='footer__copyright' >&copy; {currentYear}</p>
          <ul className='footer__text-container'>
            <li className='footer__item'>
              <a className='footer__text' target='_blank' rel='noreferrer' href='https://practicum.yandex.ru' >Яндекс.Практикум</a>
            </li>
            <li className='footer__item'>
              <a className='footer__text' target='_blank' rel='noreferrer' href='https://github.com/'>Github</a>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  )

}

export default Footer;