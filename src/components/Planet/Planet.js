import React from 'react';

const planet = (props) => {

  const { name, rotation_period, diameter, climate, gravity, terrain, surface_water, population, orbital_period } = props.location.state.planet;
  return (
    <React.Fragment>
      <h3> {name} </h3>
      <ul>
        <li> Rotation Period: {rotation_period} </li>
        <li> Orbital Period: {orbital_period} </li>
        <li> Diameter: {diameter} </li>
        <li> Climate: {climate} </li>
        <li> Gravity: {gravity} </li>
        <li> Terrain: {terrain} </li>
        <li> Surface Water: {surface_water} </li>
        <li> Population: {population} </li>
      </ul>
    </React.Fragment>
  );

}

export default planet;