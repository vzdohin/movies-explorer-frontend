import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  const [currentUser] = useState({});
  const [isLoggedIn] = useState(true);
  // const [savedMovies, isSavedMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [searchedMoviesError, setSearchedMoviesError] = useState(false)

  // useEffect(()=> {
  //   setIsLoggedIn(true)
  // })
  return (

    <Router>
      <div className='page'>
        <CurrentUserContext.Provider value={currentUser}>

          {/* <Main /> */}
          <main>
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
                element={<Register />} />
              <Route path='/signin'
                element={<Login />} />
              <Route
                path="movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    loggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path='/saved-movies'
                element={
                  < ProtectedRoute
                    loggedIn={isLoggedIn}
                    element={SavedMovies}
                  />}
              />
              <Route
                path='/profile'
                element={
                  < ProtectedRoute
                    loggedIn={isLoggedIn}
                    element={Profile}
                  />}
              />
              <Route path='*'
                element={<NotFound />} />
            </Routes>
          </main>
        </CurrentUserContext.Provider>
      </div>
    </Router>

  )
}

export default App;
