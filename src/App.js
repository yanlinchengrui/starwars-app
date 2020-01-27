import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import './App.css';

import Navbar from './components/Navbar';
import Film from './components/Film/Film';
import Person from './components/Person/Person';
import Planet from './components/Planet/Planet';
import Starship from './components/Starship/Starship';
import Vehicle from './components/Vehicle/Vehicle';
import Species from './components/Species/Species';
import MainContainer from './components/MainContainer';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path="/" component={MainContainer} />
              <Route path="/films/:id" component={Film} />
              <Route path="/people/:id" component={Person} />
              <Route path="/planets/:id" component={Planet} />
              <Route path="/starships/:id" component={Starship} />
              <Route path="/vehicles/:id" component={Vehicle} />
              <Route path="/species/:id" component={Species} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;