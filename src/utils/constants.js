const BASE_URL = 'https://api.diplom.nomoredomainsicu.ru';
// const BASE_URL = 'http://localhost:3000';
const BEATFILM_MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const MOVIE_URL = 'https://api.nomoreparties.co'




const windowWidth = window.innerWidth;

function convertorDuration(dur) {
  const hours = Math.floor(dur / 60);
  const min = dur % 60;
  return `${hours}ч${min}м`
}
export {
  BASE_URL,
  BEATFILM_MOVIE_URL,
  MOVIE_URL,
  convertorDuration,
  windowWidth
};