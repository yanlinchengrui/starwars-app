import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import axios from 'axios';
import FilmList from '../components/Film/FilmList';
import Loader from './Loader';
import withErrorHandler from '../hoc/withErrorHandler';

class MainContainer extends Component {

  state = {
    films: [],
    loading: true,
    search: '',
    error: null,
  }

  componentDidMount() {
    axios
      // have set proxy to https://swapi.co/api/ in package.json
      .get('/films')
      .then(result => {
        // after the films data is retrieved, update the loading state
        this.setState({ films: result.data.results }, () => this.setState({ loading: false }));
      })
      .catch(error => this.setState({ error: error, loading: false }));
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    // filter films by title or description (opening_crawl)
    let filteredFilms = this.state.films.filter(film => {
      return film.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        || film.opening_crawl.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    if (this.state.loading) {
      return (<Loader />);
    }
    return (
      <>
        <h3> Search By Title or Description: </h3>
        <Input value={this.state.search} onChange={this.updateSearch} />
        <FilmList films={filteredFilms} />
      </>
    );
  }

}

// wrap this component with error handler
export default withErrorHandler(MainContainer, axios);