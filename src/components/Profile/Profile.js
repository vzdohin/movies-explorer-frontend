import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Profile/Profile.css';
import Header from '../Header/Header.js'
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ loggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEdit] = useState(true)
  const navigate = useNavigate();

  const handlelogout = () => {
    // выход
    navigate('/')
  }
  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__form'>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              placeholder='Введите имя'
              type='text'
              minLength='2'
              maxLength='30'
              required />
            <span className='profile__input-error'></span>
          </label>
          <div className='profile__border-input'></div>
          <label className='profile__label'>
            E-mail
            <input
              className='profile__input'
              placeholder='Введите e-mail'
              type='email'
              required />
            <span className='profile__input-error'></span>
          </label>
        </form>
        {isEdit ? (
          <>
            <button className='profile__edit-button' type='button'>Редактировать</button>
            <button className='profile__logout-button' type='button' onClick={handlelogout}>Выйти из аккаунта</button>
          </>
        ) : (
          <button className='profile__save-button' type='submit'>Сохранить</button>
        )}

      </section>
    </>
  );
}

export default Profile;