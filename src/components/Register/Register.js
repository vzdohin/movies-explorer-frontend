import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../Form/Form.css';
import Form from '../Form/Form.js';

function Register() {
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserData({
  //     ...userData,
  //     [name]: value,
  //   });
  // };
  // const {
  //   // register,
  //   // handleSubmit,
  //   formState: { errors } } = useForm({ mode: 'onChange' });

  return (
    <Form
      title='Добро пожаловать!'
      button='Зарегистрироваться'
      question='Уже зарегистрированы?'
      linkText='Войти'
      link='/signin'
    >
      <label className='form__field'>
        Имя
        <input
          name='name'
          className='form__input'
          id='name-input'
          type='text'
          minLength='2'
          maxLength='40'
          required

        />
{/* 
        <span className='form__input-error'></span> */}
      </label>
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
      <label className='form__field form__field_margin-bot_min '>
        Пароль
        <input
          name='password'
          className='form__input'
          id='password-input'
          type='password'
          minLength='6'
          required
        />
        <span className='form__input-error'>Что-то пошло не так...</span>
      </label>
    </Form>
  );
}

export default Register;