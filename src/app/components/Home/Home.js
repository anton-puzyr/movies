import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DeleteIcon from '../../../assets/icons/delete-icon.svg';
import { deleteMovie } from '../../store/actions';
import './Home.scss';

const { array, func } = PropTypes;

class Home extends Component {
  state = {
    sort: false,
    movies: [],
  };

  static getDerivedStateFromProps(nextProps) {
    const { movies } = nextProps;

    return { movies };
  }

  render() {
    const { dispatch } = this.props;
    const { movies } = this.state;

    const handleDelete = id => dispatch(deleteMovie(id));

    const sortAlphabetically = data => {
      data.sort((a, b) => a.title < b.title ? -1 : 1);

      this.state.sort ? this.setState({ movies: data.reverse() }) : this.setState({ movies: data });
    };

    const handleSortButtonClick = () => {
      this.setState({ sort: !this.state.sort });
      sortAlphabetically(movies);
    };

    return (
      <div className="home">
        <button onClick={handleSortButtonClick}>Sort Alphabetically</button>
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

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapDispatchToProps)(Home);
