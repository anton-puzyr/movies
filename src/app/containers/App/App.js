import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../config/history';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';

import { getAllMovies } from '../../store/actions';
import Home from '../../components/Home';
import './App.scss';

const { func, array } = PropTypes;

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getAllMovies());
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="app">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={() => <Home movies={movies} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: func,
  movies: array,
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(App);
