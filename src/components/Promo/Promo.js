import React from 'react';
import Promo_logo from '../../images/promo_logo.svg'
import './Promo.css'

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <img className='promo__logo' src={Promo_logo} alt='логотип яндекс практикума' />
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  )

}

export default Promo;