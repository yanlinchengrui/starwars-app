import React from 'react';
import GoBackButton from '../GoBackButton';

const planet = (props) => {
  const { name, rotation_period, diameter, climate, gravity, terrain, surface_water, population, orbital_period } = props.location.state.planets;
  return (
    <>
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
      <GoBackButton history={props.history} />
    </>
  );
}

export default planet;