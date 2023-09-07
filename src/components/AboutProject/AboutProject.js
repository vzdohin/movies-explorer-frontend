import React from 'react';
import './AboutProject.css'
import '../Main/Main.css'

function AboutProject() {
  return (
    <div className='about-project' id='about-project'>
      <div className='main__title-container'>
        <h2 className='main__title'>О проекте</h2>
      </div>
      <div className='about-project__table'>
        <div class="about-project__table-cell">
          <h3 class="about-project__table-heading">Дипломный проект включал 5 этапов</h3>
          <p class="about-project__table-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div class="about-project__table-cell">
          <h3 class="about-project__table-heading">На выполнение диплома ушло 5 недель</h3>
          <p class="about-project__table-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        
      </div>
      <div className='about-project__time'>
          <h3 className='about-project__time-header about-project__time-header_blue'>1 неделя</h3>
          <h3 className='about-project__time-header'>4 недели</h3>
          <p className='about-project__time-description'>Back-end</p>
          <p className='about-project__time-description'> Front-end</p>
        </div>
    </div>
  )

}

export default AboutProject;