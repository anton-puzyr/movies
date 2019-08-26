import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../config/history';
import * as PropTypes from 'prop-types';

import Home from '../../components/Home';
import Layout from '../../components/Layout';
import NotFound from '../../shared/NotFound';
import AddMovie from '../../components/AddMovie';

const { func, array } = PropTypes;

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add-movie" component={AddMovie} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: func,
  movies: array,
};

export default App;
