import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';
import withErrorHandler from './withErrorHandler';

import Navbar from './components/Navbar';
import FilmList from './components/Film/FilmList';
import Film from './components/Film/Film';
import Person from './components/Person/Person';
import Planet from './components/Planet/Planet';
import Starship from './components/Starship';
import Vehicle from './components/Vehicle';
import Species from './components/Species';
import Loader from './components/Loader';

class App extends Component {

  state = {
    films: [],
    loading: true,
    search: '',
    error: false,
  }

  componentDidMount() {
    axios
      .get('/films')
      .then(result => {
        this.setState({ films: result.data.results }, () => this.setState({ loading: false }));
      })
      .catch(() => this.setState({ error: true }));
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    let filteredFilm = this.state.films.filter(film => {
      return film.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || film.opening_crawl.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    return (
      <div className="App">
        <Router>
          <Navbar />
          <Container>
            <Switch>
              <Route path="/films/:id" component={Film} />
              <Route path="/people/:id" component={Person} />
              <Route path="/planets/:id" component={Planet} />
              <Route path="/starships/:id" component={Starship} />
              <Route path="/vehicles/:id" component={Vehicle} />
              <Route path="/species/:id" component={Species} />

              <Route exact path="/">
                {this.state.loading ? <Loader /> :
                  <React.Fragment>
                    <h3> Search: </h3>
                    <Input value={this.state.search} onChange={this.updateSearch} focus />
                    <FilmList films={filteredFilm} />
                  </React.Fragment>
                }
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default withErrorHandler(App, axios);
