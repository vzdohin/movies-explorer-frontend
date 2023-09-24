/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

const BASE_URL = 'https://api.diplom.nomoredomainsicu.ru';
// const BASE_URL = 'http://localhost:3000';
const BEATFILM_MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const MOVIE_URL = 'https://api.nomoreparties.co'



const [numberOfMovies, setNumberOfMovies] = React.useState(16);
const windowWidth = window.innerWidth;

React.useEffect(() => {
  let timer;
  const handleResize = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
    const currentWindowWidth = window.innerWidth;
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

function convertorDuration(dur) {
  const hours = Math.floor(dur / 60);
  const min = dur % 60;
  return `${hours}ч${min}м`
}
export {
  BASE_URL,
  BEATFILM_MOVIE_URL,
  MOVIE_URL,
  numberOfMovies,
  handleLoadMovie,
  convertorDuration
};