import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../../components/Home';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
