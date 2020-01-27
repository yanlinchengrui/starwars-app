import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import withErrorHandler from '../../hoc/withErrorHandler';
import Loader from './../Loader';

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

  // get all the detail data from the APIs in each field (characters, planets, starships, etc) 
  getDetailData = (field) => {
    let promiseList = this.props.location.state.film[field].map(eachAPI => axios.get(eachAPI));
    // when all the promises are resolved, store the retrieved data to each specific field 
    return Promise.all(promiseList)
      .then(results => {
        let detailDataList = results.map(result => result.data);
        this.setState({ [field]: detailDataList });
      })
      .catch(error => this.setState({ error: error, loading: false }));
  }

  /* return a list of links that can access to other detail pages such as character, planet and so on
  and pass the data to the corresponding pages */
  renderListHelper = (field) => {
    // if still loading, render the Loader
    if (this.state.loading) {
      return (<Loader />);
    }
    // not loading, render the list of links
    const linkList = this.state[field].map((element, key) =>
      <li key={key}>
        {/* element.url.slice(21) will slice the "https://swapi.co/api/" and get the path like /people/:id */}
        <Link to={{ pathname: `/${element.url.slice(21)}`, state: { [field]: element } }}>
          {element.name}
        </Link>
      </li>
    );
    return (<ul> {linkList} </ul>);
  }

  // wait until all the data are retrieved from the APIs, set the loading state to false
  async componentDidMount() {
    Promise.all([
      this.getDetailData('characters'),
      this.getDetailData('planets'),
      this.getDetailData('starships'),
      this.getDetailData('vehicles'),
      this.getDetailData('species')
    ]).then(() => {
      this.setState({ loading: false });
    }).catch(error => {
      this.setState({ error: error });
    });
  }

  render() {
    const { title, producer, director, release_date, opening_crawl } = this.props.location.state.film;

    const characterList = this.renderListHelper('characters');
    const planetList = this.renderListHelper('planets');
    const starshipList = this.renderListHelper('starships');
    const vehicleList = this.renderListHelper('vehicles');
    const speciesList = this.renderListHelper('species');

    return (
      <>
        <h3> {title} </h3>
        <ul>
          <li> <strong> Director: </strong> {director} </li>
          <li> <strong> Producers: </strong> {producer} </li>
          <li> <strong> Release Date: </strong> {release_date} </li>
          <li> <strong> Description: </strong> "{opening_crawl}" </li>
          <br />
          <li> <strong> People: </strong> {characterList} </li>
          <li> <strong> Planets: </strong> {planetList} </li>
          <li> <strong> Starships: </strong> {starshipList} </li>
          <li> <strong> Vehicles: </strong> {vehicleList} </li>
          <li> <strong> Species: </strong> {speciesList} </li>
        </ul>
      </>
    );
  }
}

// wrap this component with error handler
export default withErrorHandler(Film, axios);