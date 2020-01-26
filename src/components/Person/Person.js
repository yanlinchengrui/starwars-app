import React from 'react';

const person = (props) => {
  if (!props.location.state) {
    return (
      <div> Sorry no direct access :( </div>
    )
  }
  const { name, gender, birth_year, height, mass, hair_color, skin_color, eye_color } = props.location.state.person;
  return (
    <React.Fragment>
      <h3> {name} </h3>
      <ul>
        <li> Gender: {gender} </li>
        <li> Birth Year: {birth_year} </li>
        <li> Height: {height}, Weight: {mass} </li>
        <li> Hair Color: {hair_color} </li>
        <li> Eye Color: {eye_color} </li>
        <li> Skin Color: {skin_color} </li>
      </ul>
    </React.Fragment>
  );

}

export default person;