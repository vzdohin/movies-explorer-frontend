import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css'
import Search from '../../images/search.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  query,
  setQuery,
  isShort,
  setIsShort
}) {
  const { pathname } = useLocation();
  const [localQuery, setLocalQuery] = useState('');
  const [searchError, setSearchError] = useState(null);


  const storageKey = pathname === '/movies'
    ? `moviesSearchFormQuery`
    : `savedMoviesSearchFormQuery`;

  useEffect(() => {
    const savedQuery = localStorage.getItem(storageKey);
    if (savedQuery) {
      setLocalQuery(savedQuery);
    }
  }, [storageKey]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!localQuery.trim()) {
      setSearchError('Нужно ввести ключевое слово');
      return;
    } else {
      setSearchError(null);
    }
    setQuery(localQuery);
    if (pathname === '/movies') {
      localStorage.setItem(storageKey, localQuery);
    }
  };
  return (
    <div className='search-form'>
      <section className='search-form__label'>
        <form
          className='search-form__container'
          onSubmit={handleSubmit}
          noValidate
        >
          <section className='search-form__section'>
            <img className='search-form__img' src={Search} alt='изображение лупы'></img>
            <input
              className={`search-form__input ${searchError ? 'error' : ''}`}
              placeholder={searchError ? searchError : 'Фильм'}
              required
              type='text'
              value={localQuery}
              onChange={e => setLocalQuery(e.target.value)}
            />
            {/* {searchError && <span className="search-form__error">{searchError}</span>} */}
            <button className='search-form__button' type='submit'></button>
          </section>
          <FilterCheckbox
            isShort={isShort}
            setIsShort={setIsShort}
          />
        </form>
      </section >
    </div >
  )
}

export default SearchForm;