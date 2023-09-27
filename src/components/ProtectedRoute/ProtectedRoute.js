import * as React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ loggedIn, isAuthChecked, element: Component, ...props }) => {
  if (!isAuthChecked) {
    return null;
  }

  return loggedIn
    ? <Component {...props} loggedIn={loggedIn} />
    : <Navigate to='/' replace />;
}

