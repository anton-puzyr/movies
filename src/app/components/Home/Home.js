import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DeleteIcon from '../../../assets/icons/delete-icon.svg';
import { getAllMovies, deleteMovie } from '../../store/actions';
import './Home.scss';

const { array, func } = PropTypes;

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getAllMovies());
  }

  render() {
    const { movies, dispatch } = this.props;

    const handleDelete = id => dispatch(deleteMovie(id));

    return (
      <div className="home">
        {movies.map(value => {
          return (
            <div key={value._id} className="movie-wrapper">
              <div className="movie-wrapper__movie">
                <p>{value.title}</p>
                <p>{value.releaseYear}</p>
                <p>{value.format}</p>
                <p>{value.stars}</p>
              </div>
              <DeleteIcon className="movie-wrapper__icon" onClick={() => handleDelete(value._id)} />
            </div>
          );
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
