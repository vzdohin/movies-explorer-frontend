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
          <div className='footer__text-container'>
            <p className='footer__text'>Яндекс.Практикум</p>
            <p className='footer__text'>Github</p>
          </div>
        </div>
      </div>

    </footer>
  )

}

export default Footer;