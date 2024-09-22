import React from 'react';
import './error.css';

import { useRouteError } from "react-router-dom";

function Error() {

  const error = useRouteError();

  console.log(error);

  return(
    <div className="error-component">
      <div className="heading-container">
        <div className="warning-symbol"/>
        <div>
          <h1 className="error-status">{error.status}</h1>
          <h2 className="error-status-text">{error.statusText}</h2>
        </div>
      </div>
      <p className="error-data">{error.data}</p>
      <p className="go-back">Go back to <a href="https://hunkerdowns.club/">hunkerdowns.club</a></p>
    </div>
  );
}

export default Error;