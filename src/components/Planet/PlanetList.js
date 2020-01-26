import React from 'react';
import { Link } from 'react-router-dom';

const planetList = (props) => {

  const renderList = props.planets.map(planet => {
    const id = planet.url.slice(21);
    return (
      <li key={id}>
        <Link to={{ pathname: `/${id}`, state: { planet: planet } }}>
          {planet.name}
        </Link>
      </li>
    );
  });

  return (
    <React.Fragment>
      <br />
      <li>
        <strong> Planets: </strong>
        <ul>
          {renderList}
        </ul>
      </li>
    </React.Fragment>
  );

}

export default planetList;