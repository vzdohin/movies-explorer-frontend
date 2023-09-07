import React from 'react';
import './SearchForm.css'
import Search from '../../images/search.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='search-form'>
      <section className='search-form__label'>
        <div className='search-form__container'>
          <section className='search-form__section'>
            {/* <label className='search-form__label'></label> */}
            <img className='search-form__img' src={Search} alt='изображение лупы'></img>
            <input className='search-form__input' placeholder='Фильм' />
            <button className='search-form__button'></button>
            <div className='search-form__border'></div>
          </section>
          <FilterCheckbox />
        </div>

      </section>
    </div>
  )

}

export default SearchForm;