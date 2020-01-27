import React from 'react';
import { Link } from 'react-router-dom';

const notFound = () => (
  <>
    <center> Sorry, this page does not exist :( </center>
    <center>
      <Link to='/'>Return to Home Page</Link>
    </center>
  </>
);

export default notFound;