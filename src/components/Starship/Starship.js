import React from 'react';
import GoBackButton from '../GoBackButton';

const starship = (props) => {
  const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class } = props.location.state.starships;
  return (
    <>
      <h3> {name} </h3>
      <ul>
        <li> Model: {model} </li>
        <li> Manufacturer: {manufacturer} </li>
        <li> Cost In Credits: {cost_in_credits} </li>
        <li> Length: {length} </li>
        <li> Max Atmosphering Speed: {max_atmosphering_speed} </li>
        <li> Crew: {crew} </li>
        <li> Passengers: {passengers} </li>
        <li> Cargo_capacity: {cargo_capacity} </li>
        <li> Consumables: {consumables} </li>
        <li> Hyperdrive Rating: {hyperdrive_rating} </li>
        <li> MGLT: {MGLT} </li>
        <li> Starship Class: {starship_class} </li>
      </ul>
      <GoBackButton history={props.history} />
    </>
  );
}

export default starship;