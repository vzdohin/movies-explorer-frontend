import React from 'react';
import './AboutMe.css'
import '../Main/Main.css'
import MyPhoto from '../../images/my-image.png'

function AboutMe() {
  return (
    <section className='about-me main' id='about-me'>

      <div className='main__title-container'>
        <h2 className='main__title'>Студент</h2>
      </div>
      <div className='about-me__container'>
        <div className='about-me__content'>
          <h3 className='about-me__title'>Александр</h3>
          <p className='about-me__info'>Фронтенд-разработчик, 29 лет</p>
          <p className='about-me__description'>Живу в прекрасном городе Оренбург. Относительно недавно я начал изучать фронтенд разработку, но это поглотило
            меня так, что решил посвятить себя ей полностью.
            В последние годы я работал по другой специальности. В основном в области логистики, на позициях от
            обычного диспетчера до руководителя отдела и ИП.
            Все свое свободное время последний год трачу на обучение: просмотры видео по разработке, статьи.
            Помимо этого играю на гитаре, хожу в походы, и провожу время за просмотром сериалов.</p>
          <a className='about-me__link' target='_blank' href='https://github.com/vzdohin' rel="noreferrer">Github</a>
        </div>
        <img className='about-me__image' src={MyPhoto} alt='портрет автора в белой рубашке на белом фоне'></img>
      </div>
    </section>
  )

}

export default AboutMe;