import { useState } from 'react';

const useFormValidation = (initialValues = {}) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const validateName = (name) => /^[a-zA-Zа-яА-Я\s-]+$/.test(name);
  const validatePassword = (password) => password.length >= 6;

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        return validateEmail(value) ? '' : 'Неверный формат e-mail';
      case 'name':
        return validateName(value) ? '' : 'Имя должно содержать только латиницу, кириллицу, пробел или дефис';
      case 'password':
        return validatePassword(value) ? '' : 'Пароль должен быть не менее 6 символов';
      default:
        return '';
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    const error = validateField(name, value);
    const newErrors = { ...errors, [name]: error };
    setErrors(newErrors);
    const allFieldsHaveValues = Object.values({ ...formData, [name]: value }).every((field) => field);
    const noErrors = !Object.values(newErrors).some((error) => error);
    setIsValid(allFieldsHaveValues && noErrors);
};

  return { formData, errors, isValid, handleChange };
};

export default useFormValidation;
