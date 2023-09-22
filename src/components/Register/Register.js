import React from 'react';
import Form from '../Form/Form.js';
import useFormValidation from '../../hooks/useFormValidation';

function Register({ onRegister }) {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const {
    formData,
    errors,
    isValid,
    handleChange,
  } = useFormValidation(initialValues);
  const [serverRegError, setServerRegError] = React.useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    onRegister(formData.name, formData.email, formData.password)
    .catch(err => {
      console.log("Server error during registration:", err.message);
      setServerRegError(err.message);
  });
  }

  return (
    <Form
      title='Добро пожаловать!'
      button='Зарегистрироваться'
      question='Уже зарегистрированы?'
      linkText='Войти'
      link='/signin'
      handleSubmit={handleSubmit}
      isValid={isValid}
      serverRegError={serverRegError}
    >
      <label className='form__field'>
        Имя
        <input
          name='name'
          className='form__input'
          id='name-input'
          type='text'
          minLength='2'
          maxLength='30'
          required
          value={formData.name || ''}
          onChange={handleChange}
        />
        <span className='form__input-error'>{errors.name}</span>
      </label>
      <label className='form__field'>
        E-mail
        <input
          name='email'
          className='form__input form__input_weight'
          id='email-input'
          type='email'
          required
          value={formData.email || ''}
          onChange={handleChange}
        />
        <span className='form__input-error'>{errors.email}</span>
      </label>
      <label className='form__field form__field_margin-bot_min'>
        Пароль
        <input
          name='password'
          className='form__input'
          id='password-input'
          type='password'
          minLength='6'
          maxLength='40'
          required
          value={formData.password || ''}
          onChange={handleChange}
        />
        <span className='form__input-error'>{errors.password}</span>
      </label>
    </Form>
  );
}

export default Register;
