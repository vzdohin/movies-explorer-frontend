import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Form.css';
import { useLocation } from 'react-router-dom';

function Form(props) {
  const pathname = useLocation();
  return (
    <main className='form'>
      <div className='form__container'>
        <Link to='/'>
          <img className='form__logo' alt='логотип' src={Logo} />
        </Link>
        <h1 className='form__title'>{props.title}</h1>
        <form className='form__form' onSubmit={props.handleSubmit} noValidate>
          {props.children}
          <span className='form__server-error'>{pathname.pathname  === '/signin' ? props.serverError : props.serverRegError}</span>
          <button type='submit' className='form__button'>
            {props.button}
          </button>
        </form>
        <p className='form__text'>{props.question}&nbsp;
          <Link to={props.link} className='form__link'>{props.linkText}</Link>
        </p>
      </div>
    </main>
  );
}

export default Form;
