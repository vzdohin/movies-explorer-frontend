import { BASE_URL, MOVIE_URL } from "./constants";
import { checkResponse } from "./utils";

export const registr = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => checkResponse(res));
};
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => checkResponse(res));
};
export const checkAuth = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => checkResponse(res));
};
export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
  })
  .then((res) => checkResponse(res));
}
export const getUserById = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((res) => checkResponse(res));
};
export const setUserInfo = (userData) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userData.name,
      email: userData.email
    }),
  })
    .then((res) => checkResponse(res));
};
export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => checkResponse(res));
};
export const addSavedMovies = (dataMovies) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nameRU: dataMovies.nameRU,
      nameEN: dataMovies.nameEN,
      country: dataMovies.country,
      director: dataMovies.director,
      duration: dataMovies.duration,
      year: dataMovies.year,
      description: dataMovies.description,
      image: `${MOVIE_URL}`+ dataMovies.image.url,
      trailerLink: dataMovies.trailerLink,
      thumbnail: `${MOVIE_URL}`+ dataMovies.image.formats.thumbnail.url,
      movieId: dataMovies.id,
    })
  })
    .then((res) => checkResponse(res));
};
export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      movieId: movieId,
    }),
  })
    .then((res) => checkResponse(res));
}
