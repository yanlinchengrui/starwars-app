import React from 'react';
import GoBackButton from '../GoBackButton';

const vehicle = (props) => {
  const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class } = props.location.state.vehicles;
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
        <li> Vehicle Class: {vehicle_class} </li>
      </ul>
      <GoBackButton history={props.history} />
    </>
  );
}

export default vehicle;