import React from 'react';
// import { Link } from 'react-router-dom';
// import AboutProject from '../AboutProject/AboutProject';
import './NavTab.css'

function NavTab() {
  return (
    <div className='nav-tab'>
      <div className='nav-tab__contaner'>
        <a href='#about-project' className='nav-tab__link'>О проекте</a>
        <a href='#techs' className='nav-tab__link'>Технологии</a>
        <a href='#about-me' className='nav-tab__link'>Студент</a>
        
      </div>

    </div>
  )

}

export default NavTab;