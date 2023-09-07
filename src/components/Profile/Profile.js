import React, { useState, useContext } from 'react';
import '../Profile/Profile.css';
import Header from '../Header/Header.js'
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ loggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(true)
  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile'>
        <h3 className='profile__title'>Привет, {currentUser.name}!</h3>
        <form className='profile__form'>
          <label className='profile__label'>
            <div className='profile__label-name'>Имя</div>
            <input className='profile__input'></input>
            <span className='profile__input-error'></span>
          </label>
          <div className='profile__border-input'></div>
          <label className='profile__label'>
            <div>E-mail</div>

            <input className='profile__input'></input>
            <span className='profile__input-error'></span>
          </label>
        </form>
        {isEdit ? (
          <>
            <button className='profile__edit-button'>Редактировать</button>
            <button className='profile__logout-button'>Выйти из аккаунта</button>
          </>
        ) : (
          <button className='profile__save-button'>Сохранить</button>
        )}

      </section>
    </>
  );
}

export default Profile;