import React, { useEffect } from 'react';
import './FilterCheckbox.css'
import { useLocation } from 'react-router-dom';


function FilterCheckbox({ isShort, setIsShort }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const storageKey = pathname === '/movies'
      ? 'checkboxIsShortMovies'
      : 'checkboxIsShortSavedMovies';
    const savedIsShort = localStorage.getItem(storageKey);

    if (savedIsShort !== null) {
      setIsShort(JSON.parse(savedIsShort));
    }
  }, [pathname, setIsShort]);

  useEffect(() => {
    const storageKey = pathname === '/movies' ? 'checkboxIsShortMovies' : 'checkboxIsShortSavedMovies';
    localStorage.setItem(storageKey, JSON.stringify(isShort));
  }, [isShort, pathname]);

  return (
    <div className='filter'>
      <div className='filter__container'>
        <input
          className='filter__checkbox'
          type='checkbox'
          placeholder='none'
          checked={isShort}
          onChange={() => setIsShort(!isShort)}
        ></input>
        <p className='filter__text'>Короткометражки</p>
      </div>
    </div>
  );
}

export default FilterCheckbox;