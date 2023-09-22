/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import Footer from '../Footer/Footer.js'
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import NotFound from '../NotFound/NotFound.js'
import Profile from '../Profile/Profile.js'
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies'
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

import './App.css';

import * as api from '../../utils/MainApi';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [allSavedMovies, setAllSavedMovies] = useState([])
  const [isRegistrationSuccess, setRegistrationSuccess] = useState(null)
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [searchedMoviesError] = useState(false)

  const navigate = useNavigate();


  React.useEffect(() => {
    if (isLoggedIn) {
      Promise.all([api.getSavedMovies(), api.getUserById()])
        .then(([savedMovies, userInfo]) => {
          setSavedMovies(savedMovies);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
        })
    }
  }, [isLoggedIn])

  React.useEffect(() => {
    if (!isLoggedIn) {
      api.checkAuth()
        .then((res) => {
          if (res) {
            setIsLoggedIn(true)
            navigate('/', { replace: true })
          } else { setIsLoggedIn(false) }
        })
        .catch(err => {
          console.error(err);
        })
    }
  }, [])

  function handleRegistration(name, email, password) {
    return api.registr(name, email, password)
      .then((res) => {
        if (res) {
          handleAuthorization(email, password);
        }
      })
      .catch(err => {
        console.log(err)
        throw err;
      })
  };
  function handleAuthorization(email, password) {
    return api.authorize(email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true)
          navigate('/movies', { replace: true })
        }
      })
      .catch(err => {
        console.log(err);
        throw err;
      })
  };
  function handleUpdateUser(newData) {
    api.setUserInfo(newData)
      .then(() => {
        setCurrentUser(newData);
        setRegistrationSuccess(true);
        setSuccessPopupOpen(true);
      })
      .catch((err) => {
        console.error(err);
        setSuccessPopupOpen(true);
        setRegistrationSuccess(false);
      })
  };
  function handleLogout() {
    api.logout()
      .then(() => {
        localStorage.clear();
        setIsLoggedIn(false)
        navigate('/', { replace: true })
      })
      .catch(err => {
        console.log(err)
      })
  };
  function closePopup() {
    setSuccessPopupOpen(false)
  };
  function handleSaveCard(movie) {
    const isSavedMovie = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movie.id
    );

    if (!isSavedMovie) {
      api
        .addSavedMovies(movie)
        .then((newMovie) => {
          setSavedMovies([...savedMovies, newMovie]);
          localStorage.setItem(
            'savedMovies',
            JSON.stringify([...savedMovies, newMovie])
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .deleteMovie(isSavedMovie._id)
        .then(() => {
          const updatedSavedMovies = savedMovies.filter(
            (savedMovie) => savedMovie.movieId !== movie.id
          );
          setSavedMovies(updatedSavedMovies);
          localStorage.setItem(
            'savedMovies',
            JSON.stringify(updatedSavedMovies)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleDeleteCard(movie) {
    console.log(movie)
    api
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((m) => m._id !== movie._id));
        localStorage.setItem(
          'savedMovies',
          JSON.stringify(savedMovies.filter((m) => m._id !== movie._id))
        );
      })
      .catch(err => {

        console.log(err)
      })
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <div className='page__content'>
          <Routes>
            <Route path='/'
              element={
                <>
                  <Header
                    loggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>} />
            <Route path='/signup'
              element={<Register
                onRegister={handleRegistration}
              />} />
            <Route path='/signin'
              element={<Login
                onAuthorize={handleAuthorization}
              />} />
            <Route
              path="movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  loggedIn={isLoggedIn}
                  searchedMoviesError={searchedMoviesError}
                  savedMovies={savedMovies}
                  onFilteredMovies={setFilteredMovies}
                  filteredMovies={filteredMovies}
                  onMovieLike={handleSaveCard}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                < ProtectedRoute
                  loggedIn={isLoggedIn}
                  element={SavedMovies}
                  savedMovies={savedMovies}
                  onMovieDeleteLike={handleDeleteCard}
                  allSavedMovies={allSavedMovies}
                  setAllSavedMovies={setAllSavedMovies}
                  filteredSavedMovies={filteredMovies}
                  onFilteredSavedMovies={setFilteredMovies}
                />}
            />
            <Route
              path='/profile'
              element={
                < ProtectedRoute
                  currentUser={currentUser}
                  loggedIn={isLoggedIn}
                  element={Profile}
                  handlelogout={handleLogout}
                  onUpdateUser={handleUpdateUser}
                  onClose={closePopup}
                  isOpen={isSuccessPopupOpen}
                  isSuccess={isRegistrationSuccess}
                />}
            />
            <Route path='*'
              element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
