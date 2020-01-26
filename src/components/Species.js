import React from 'react';

const species = (props) => {

  const { name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, language, average_lifespan } = props.location.state.species;
  return (
    <React.Fragment>
      <h3> {name} </h3>
      <ul>
        <li>Classification: {classification} </li>
        <li>Designation: {designation} </li>
        <li>Average Height: {average_height} </li>
        <li>Skin Colors: {skin_colors} </li>
        <li>Hair Colors: {hair_colors} </li>
        <li>Eye Colors: {eye_colors} </li>
        <li>Language: {language} </li>
        <li>Average Lifespan: {average_lifespan} </li>
      </ul>
    </React.Fragment>
  );

}

export default species;