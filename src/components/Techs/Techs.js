import React from 'react';
import './Techs.css'
import '../Main/Main.css'

function Techs() {
  return (
    <section className='techs main' id='techs'>
      <div>
        <div className='main__title-container main__title-container_height'>
          <h2 className='main__title'>Технологии</h2>
        </div>
      </div>
      <h3 className='techs__title'>7 технологий</h3>
      <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__list-item">HTML</li>
        <li className="techs__list-item">CSS</li>
        <li className="techs__list-item">JS</li>
        <li className="techs__list-item">React</li>
        <li className="techs__list-item">Git</li>
        <li className="techs__list-item">Express.js</li>
        <li className="techs__list-item">mongoDB</li>
      </ul>
    </section>
  )

}

export default Techs;