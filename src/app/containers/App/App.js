import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../config/history';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from '../../components/Home';
import Layout from '../../components/Layout';
import NotFound from '../../shared/NotFound';
import AddMovie from '../../components/AddMovie';
import License from '../../shared/Footer/License';
import { getAllMovies } from '../../store/actions';

const { func, array } = PropTypes;

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getAllMovies());
  }

  render() {
    const { movies } = this.props;

    return (
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={() => <Home movies={movies} />} />
            <Route path="/add-movie" component={AddMovie} />
            <Route path="/license" component={License} />
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

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(App);
