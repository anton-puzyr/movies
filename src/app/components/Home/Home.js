import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllMovies } from '../../store/actions';
import './Home.scss';

const { array, func } = PropTypes;

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getAllMovies());
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="home">
        {movies.map(value => {
          return <div key={value._id}>{value.title}</div>;
        })}
      </div>
    );
  }
}

Home.propTypes = {
  movies: array,
  dispatch: func,
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(Home);
