import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './PopupBurgerMenu.css';
import ButtonProfile from '../../images/profile_button_pr.svg'


function PopupBurgerMenu({isOpen, isClose}) {
  // const location = useLocation();
  // const [headerBackgroundColor, setHeaderBackgroundColor] = useState('');
  // const [headerLinkActive, setHeaderLinkActive] = useState('');
  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     setHeaderBackgroundColor('#DDDEE3');
  //   } else {
  //     setHeaderBackgroundColor('#FAFAFA');
  //   }
  // }, [location.pathname]);
  return (
    <div className={`popup ${isOpen? `popup_opened` : ``}`}>
      <div className='popup__overlay'></div>
      <div className='popup__container'>
        
        <button className='popup__button-close' onClick={isClose}></button>
        <section className='popup__links-container'>
          <NavLink
            to='/'
            className='popup__link'
            activeClassName='active'
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className='popup__link'
            activeClassName='active'
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className='popup__link'
            activeClassName='active'
          >
            Сохранённые фильмы
          </NavLink>
          <Link to='/profile' className='popup__button-account'>
            <img alt='кнопка перехода в аккаунт' src={ButtonProfile} className='popup__button-image'></img>
            <p className='popup__button-text'>Аккаунт</p>
          </Link>
        </section>
      </div>
      {/* <Link to='/profile' className='popup__button-account'>
        <img alt='кнопка перехода в аккаунт' src={ButtonProfile} className='popup__button-image'></img>
        <p className='popup__button-text'>Аккаунт</p>
      </Link> */}
    </div>
  )

}

export default PopupBurgerMenu;