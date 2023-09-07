import * as React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ loggedIn, element: Component, ...props }) => {
  return (
    <>
      {loggedIn ?
        (<Component {...props} loggedIn={loggedIn} />
        ) : (
          <Navigate to='/' replace />)
      }
    </>
  )
}
