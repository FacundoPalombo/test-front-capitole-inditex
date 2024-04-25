import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { HttpError } from 'http-errors';

const Error = () => {
  const error = useRouteError() as HttpError;
  console.error(error);
  const message = error.statusText ?? error.message ?? 'Unexpected Error';

  return (
    <div id="error" data-testid="error">
      <h1>Oops!</h1>
      <Link to="/">Go back to home</Link>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </div>
  );
};

export default Error;
