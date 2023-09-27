import React, { useState, useEffect,useContext } from 'react';
import '../Profile/Profile.css';
import Header from '../Header/Header.js'
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ loggedIn,
  handlelogout,
  onUpdateUser,
  onClose,
  isOpen, isSuccess
}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser])

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({ name: name, email: email });
    setIsEdit(false);
  }
  function handleSetName(e) {

    setName(e.target.value);
    const isEdited = e.target.value !== currentUser.name || email !== currentUser.email;
    setIsEdit(isEdited);
  }
  function handleSetEmail(e) {
    setEmail(e.target.value);
    const isEdited = name !== currentUser.name || e.target.value !== currentUser.email;
    setIsEdit(isEdited);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='profile'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__form' onSubmit={handleSubmit} noValidate>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              placeholder='Введите имя'
              type='text'
              minLength='2'
              maxLength='30'
              required
              value={name || ''}
              onChange={handleSetName} />
            <span className='profile__input-error'></span>
          </label>
          <label className='profile__label'>
            E-mail
            <input
              className='profile__input'
              placeholder='Введите e-mail'
              type='email'
              required
              value={email || ''}
              onChange={handleSetEmail} />
            <span className='profile__input-error'></span>
          </label>
          {!isEdit ? (
            <>
              <button className='profile__edit-button' type='button' disabled>Редактировать</button>
              <button
                className='profile__logout-button'
                type='button'
                onClick={handlelogout}>Выйти из аккаунта</button>
            </>
          ) : (
            <button className='profile__save-button' type='submit' disabled={!isEdit}>Сохранить</button>
          )}
        </form>
        <InfoTooltip
          isOpen={isOpen}
          isSuccess={isSuccess}
          onClose={onClose} />
      </main>
    </>
  );
}

export default Profile;