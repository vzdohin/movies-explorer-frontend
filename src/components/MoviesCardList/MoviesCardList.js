import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
// import { windowWidth } from '../../utils/constants'


function MoviesCardList({
  savedMovies,
  allMovies,
  onMovieLike,
  onMovieDeleteLike,
  savedMoviesRoute,
}) {
  const { pathname } = useLocation();
  const [numberOfMovies, setNumberOfMovies] = React.useState(16);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    let timer;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
      const currentWindowWidth = window.innerWidth;
      setWindowWidth(currentWindowWidth);
      let visibleMovies;
      if (currentWindowWidth > 1280) {
        visibleMovies = 16;
      } else if (currentWindowWidth > 1024 && currentWindowWidth < 1279) {
        visibleMovies = 12;
      } else if (currentWindowWidth > 768 && currentWindowWidth < 1023) {
        visibleMovies = 8;
      } else if (currentWindowWidth > 320) {
        visibleMovies = 5;
      }
      setNumberOfMovies(visibleMovies);
      }, 300);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  const handleLoadMovie = () => {
    let additionalMovies;
    if (windowWidth > 1280) {
      additionalMovies = 4;
    } else if (windowWidth > 1024 && windowWidth < 1279) {
      additionalMovies = 3;
    } else if (windowWidth > 768 && windowWidth < 1023) {
      additionalMovies = 2;
    } else if (windowWidth > 320) {
      additionalMovies = 2;
    }
    setNumberOfMovies(prevCount => prevCount + additionalMovies);
  }
  const renderAllMovies = allMovies ? allMovies.slice(0, numberOfMovies) : [];
  return (
    <>
      <section className='cards__container'>
        <ul className='cards'>
          {pathname === '/saved-movies' ? (
            <>
              {savedMovies.map(movie => (
                <MoviesCard
                  key={movie._id || movie.id}
                  movie={movie}
                  savedMovies={savedMovies}
                  onMovieLike={onMovieLike}
                  onMovieDeleteLike={onMovieDeleteLike}
                  savedMoviesRoute={savedMoviesRoute}
                />
              ))}
            </>
          ) : (
            <>
              {renderAllMovies.map(movie => (
                <MoviesCard
                  key={movie._id || movie.id}
                  movie={movie}
                  savedMovies={savedMovies}
                  onMovieLike={onMovieLike}
                />
              ))}
            </>
          )}
        </ul>
      </section>
      <div className='cards__button-container'>
        {pathname === '/movies' && allMovies.length > numberOfMovies
          ? <button
            className='cards__button'
            type='submit'
            onClick={handleLoadMovie}
          >Ещё</button>
          : ''}
      </div>
    </>
  )
}

export default MoviesCardList;
