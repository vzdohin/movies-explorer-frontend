import React from 'react';
import '../Form/Form.css';
import Form from '../Form/Form.js';

function Login() {
  return (
    <Form
      title='Рады видеть!'
      button='Войти'
      question='Ещё не зарегистрированы?'
      linkText='Регистрация'
      link='/signup'
    >
      <label className='form__field'>
        E-mail
        <input
          name='email'
          className='form__input form__input_weight'
          id='email-input '
          type='email'
          required
        />
        {/* <span className='form__input-error'></span> */}
      </label>
      <label className='form__field form__field_margin-bot_max'>
        Пароль
        <input
          name='password'
          className='form__input'
          id='password-input'
          type='password'
          minLength='6'
          required
        />
        <span className='form__input-error'></span>
      </label>
    </Form>
  );
}

export default Login;