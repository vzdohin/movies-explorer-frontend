import React, { } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg'
import './Form.css'

function Form(props) {
  return (
    // <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} >
    //   <div className="popup__container">
    //     <form className="popup__form"
    //       name={props.name}
    //       onSubmit={props.onSubmit}
    //       >
    //       <h2 className="popup__title">{props.title}</h2>
    //       {props.children}
    //       <button type="submit" className="popup__save-button ">{props.titleButton}</button>
    //     </form>
    //     <button type="button" className="popup__close-button" onClick={props.onClose}></button>
    //   </div>
    // </div>
    <main  className='form'>
      <div className='form__container'>
        <Link to='/'>
          <img className='form__logo' alt='логотип' src={Logo} />
        </Link>
        <h1 className='form__title'>{props.title}</h1>
        <form className='form__form'>
          {props.children}
          <button type='submit' className='form__button'>{props.button}</button>
        </form>
        <p className='form__text'>{props.question}&nbsp;
          <Link to={props.link} className='form__link'>{props.linkText}</Link>
        </p>
      </div>
    </main>
  )
}

export default Form;