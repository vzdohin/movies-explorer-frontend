import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css'
import Logo from '../../images/logo.svg'
import Menu from '../../images/burger-menu.svg'
import ButtonProfile from '../../images/profile_button_pr.svg'
import PopupBurgerMenu from '../PopupBurgerMenu/PopupBurgerMenu';

function Header({ loggedIn }) {
  const location = useLocation();
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('');
  // const [headerLinkActive, setHeaderLinkActive] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    if (location.pathname === '/') {
      setHeaderBackgroundColor('#DDDEE3');
    } else {
      setHeaderBackgroundColor('#FAFAFA');
    }
  }, [location.pathname]);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);

  };
  return (
    <>
      {loggedIn ? (
        <header className='header' style={{ backgroundColor: headerBackgroundColor }} >
          <div className='header__films-container'>
            <section className='header__links'>
              <Link to='/'>
                <img className='header__logo' src={Logo} alt='логотип' ></img>
              </Link>
              <nav className='header__button-container header__button-container_gap header__button-container_films '>
                <NavLink
                  to='/movies'
                  className={({ isActive }) => isActive? 'header__button-films active': 'header__button-films'}
                  // activeClassName='active'
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to='/saved-movies'
                  className={({ isActive }) => isActive? 'header__button-films active': 'header__button-films'}
                  // activeClassName='active'
                >
                  Сохранённые фильмы
                </NavLink>
              </nav>

            </section>
            <Link to='/profile' className='header__button-account'>
              <img alt='кнопка перехода в аккаунт' src={ButtonProfile} className='header__button-image'></img>
              <p className='header__button-text'>Аккаунт</p>
            </Link>
            <button className='header__button-menu' type='button' onClick={openMenu}>
              <img className='header__button-menu header__button-menu_image' src={Menu} alt='кнопка вызова меню' />
            </button>
          </div>
          <PopupBurgerMenu isOpen={isMenuOpen} isClose={closeMenu}/>
        </header>
      ) : (
        <header className='header ' style={{ backgroundColor: headerBackgroundColor }}>
          <div className='header__container'>
            <Link to='/'>
              <img className='header__logo' src={Logo} alt='logo' ></img>
            </Link>
            <section className='header__button-container'>
              <Link to='signup' className='header__button'>Регистрация</Link>
              <Link to='signin' className='header__button header__button_active'>Войти</Link>
            </section>
          </div>
        </header>
      )}
    </>
  )

}

export default Header;