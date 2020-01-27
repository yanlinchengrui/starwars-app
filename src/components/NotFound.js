import React from 'react';
import { Link } from 'react-router-dom';

const notFound = () => (
  <div>
    <center> Sorry, this page does not exist :( </center>
    <center>
      <Link to='/'>Return to Home Page</Link>
    </center>
  </div>
);

export default notFound;