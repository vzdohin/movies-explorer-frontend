import React from 'react';
import './FilterCheckbox.css'


function FilterCheckbox() {
  return (
    <div className='filter'>
      <div className='filter__container'>
        <input
          className='filter__checkbox'
          type='checkbox'
          placeholder='none'
        ></input>
        <p className='filter__text'>Короткометражки</p>
      </div>
    </div>
  )

}

export default FilterCheckbox;