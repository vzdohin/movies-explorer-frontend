import React from 'react';
import Form from '../Form/Form.js';
import useFormValidation from '../../hooks/useFormValidation';

function Login({ onAuthorize }) {
  const initialValues = {
    email: '',
    password: '',
  };

  const {
    formData: values,
    errors,
    isValid,
    handleChange,
  } = useFormValidation(initialValues);
  const [serverError, setServerError] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    onAuthorize(values.email, values.password)
      .catch(err => {
        setServerError('Вы ввели неверный адрес электронной почты или пароль.');
      });
  }

  return (
    <Form
      title='Рады видеть!'
      button='Войти'
      question='Ещё не зарегистрированы?'
      linkText='Регистрация'
      link='/signup'
      handleSubmit={handleSubmit}
      serverError={serverError}
    >
      <label className='form__field'>
        E-mail
        <input
          name='email'
          className='form__input form__input_weight'
          id='email-input'
          type='email'
          placeholder='Введите e-mail'
          required
          value={values.email}
          onChange={handleChange}
        />
        <span className='form__input-error'>{errors.email}</span>
      </label>
      <label className='form__field form__field_margin-bot_max'>
        Пароль
        <input
          name='password'
          className='form__input'
          id='password-input'
          type='password'
          minLength='6'
          maxLength='40'
          placeholder='Введите пароль'
          required
          value={values.password}
          onChange={handleChange}
        />
        <span className='form__input-error'>{errors.password}</span>
      </label>
    </Form>
  );
}

export default Login;