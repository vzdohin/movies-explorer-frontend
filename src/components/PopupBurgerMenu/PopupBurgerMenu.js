import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './PopupBurgerMenu.css';
import ButtonProfile from '../../images/profile_button_pr.svg'


function PopupBurgerMenu({ isOpen, isClose }) {
  return (
    <div className={`popup ${isOpen ? `popup_opened` : ``}`}>
      <div className='popup__overlay'></div>
      <div className='popup__container'>
        <button className='popup__button-close' type='button' onClick={isClose}></button>
        <nav>
          <ul className='popup__links-container'>
            <li className='popup__links'>
              <NavLink
                exact='true'
                to='/'
                className='popup__link'
              >
                Главная
              </NavLink>
            </li>
            <li className='popup__links'>
              <NavLink
                exact='true'
                to='/movies'
                className='popup__link'
              >
                Фильмы
              </NavLink>
            </li>
            <li className='popup__links'>
              <NavLink
                exact='true'
                to='/saved-movies'
                className='popup__link'
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <Link to='/profile' className='popup__button-account'>
            <img alt='кнопка перехода в аккаунт' src={ButtonProfile} className='popup__button-image'></img>
            <p className='popup__button-text'>Аккаунт</p>
          </Link>

        </nav>
      </div>
    </div>
  )

}

export default PopupBurgerMenu;