import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css'
import CardImage from '../../images/card_img.svg'
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


function MoviesCardList({ savedMovies, isLoading, searchedMoviesError }) {
  const { pathname } = useLocation();
  return (
    <>
    {isLoading && <Preloader />}
    {!isLoading}
      {pathname === '/saved-movies' ? (
        <div className='cards__container'>
          
          <article className='cards'>
            <MoviesCard 
            savedMovies={savedMovies}/>
            <MoviesCard 
            savedMovies={savedMovies}/>
            <MoviesCard 
            savedMovies={savedMovies}/>

          </article>
          <div className='cards__button-container'>
            {/* <button className='cards__button'>Ещё</button> */}
          </div>
        </div>
      ) : (
        <div className='cards__container'>

          <article className='cards'>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </article>
          <div className='cards__button-container'>
            <button className='cards__button'>Ещё</button>
          </div>
        </div>
      )}
    </>
  )

}

export default MoviesCardList;