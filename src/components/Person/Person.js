import React from 'react';
import GoBackButton from '../GoBackButton';

const person = (props) => {
  const { name, gender, birth_year, height, mass, hair_color, skin_color, eye_color } = props.location.state.characters;
  return (
    <>
      <h3> {name} </h3>
      <ul>
        <li> Gender: {gender} </li>
        <li> Birth Year: {birth_year} </li>
        <li> Height: {height}, Weight: {mass} </li>
        <li> Hair Color: {hair_color} </li>
        <li> Eye Color: {eye_color} </li>
        <li> Skin Color: {skin_color} </li>
      </ul>
      <GoBackButton history={props.history} />
    </>
  );
}

export default person;