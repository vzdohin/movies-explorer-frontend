import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate();
  return (
    <section className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <button to='/' className='not-found__link' type='button' onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
  )

}

export default NotFound;