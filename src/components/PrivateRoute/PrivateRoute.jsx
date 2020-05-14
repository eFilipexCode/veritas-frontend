import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function PrivateRoute({ component: Component, ...rest }) {
  const logged = localStorage.getItem('blog-adm-logged');

  return (
    <Route
      {...rest}
      render={props =>
        logged ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
      }
    />
  );
}

export default PrivateRoute;