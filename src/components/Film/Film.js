import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import withErrorHandler from '../../withErrorHandler';
import Loader from './../Loader';
import PersonList from '../Person/PersonList';
import PlanetList from '../Planet/PlanetList';

class Film extends Component {

  state = {
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
    loading: true,
    error: null,
  }

  promisesHelper = (field) => {
    let multiPromises = this.props.location.state.film[field].map(eachAPI => axios.get(eachAPI));
    return Promise.all(multiPromises)
      .then(results => {
        console.log(results, field);
        let dataList = [];
        results.forEach(result => {
          dataList.push(result.data);
        });
        this.setState({ [field]: dataList });
      })
      .catch(error => this.setState({ error: error }));
  }

  listHelper = (field) => {
    if (this.state.loading) {
      return (<Loader />);
    }

    const itemList = this.state[field].map((element, key) =>
      <li key={key}>
        <Link to={{ pathname: `/${element.url.slice(21)}`, state: { [field]: element } }}>
          {element.name}
        </Link>
      </li>
    );
    console.log(itemList, field);

    return (
      <ul>
        {itemList}
      </ul>
    );
  }

  async componentDidMount() {
    // await this.promisesHelper('characters');
    // await this.promisesHelper('planets');
    // await this.promisesHelper('starships');
    // await this.promisesHelper('vehicles');
    // await this.promisesHelper('species');
    // this.setState({ loading: false });
    console.log(this.state);
    Promise.all([
      this.promisesHelper('characters'),
      this.promisesHelper('planets'),
      this.promisesHelper('starships'),
      this.promisesHelper('vehicles'),
      this.promisesHelper('species')
    ]).then(() => {
      this.setState({ loading: false });
    }).catch(error => {
      console.log(error);
      this.setState({ error: error });
    });
  }

  render() {
    const { title, producer, director, release_date, opening_crawl } = this.props.location.state.film;

    const peopleList = this.listHelper('characters');
    const planetsList = this.listHelper('planets');
    const starshipsList = this.listHelper('starships');
    const vehiclesList = this.listHelper('vehicles');
    const speciesList = this.listHelper('species');

    return (
      <React.Fragment>
        <h3> {title} </h3>
        <ul>
          <li> <strong> Director: </strong> {director} </li>
          <li> <strong> Producers: </strong> {producer} </li>
          <li> <strong> Release Date: </strong> {release_date} </li>
          <li> <strong> Description: </strong> "{opening_crawl}" </li>

          {<PersonList persons={this.state.characters} />}
          {<PlanetList planets={this.state.planets} />}
          <li> <strong> Starships: </strong> {starshipsList} </li>
          <li> <strong> Vehicles: </strong> {vehiclesList} </li>
          <li> <strong> Species: </strong> {speciesList} </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default withErrorHandler(Film, axios);