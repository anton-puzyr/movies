import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../shared/Button';
import SearchBar from '../SearchBar';
import DeleteIcon from '../../../assets/icons/delete-icon.svg';
import { deleteMovie } from '../../store/actions';
import './Home.scss';

const { array, func } = PropTypes;

class Home extends Component {
  searchData = [];

  constructor(props) {
    super(props);

    const { movies } = props;

    this.state = {
      sort: false,
      movies,
    };

    this.searchData = movies;
  }

  render() {
    const { dispatch } = this.props;
    const { movies, sort } = this.state;

    const handleDelete = id => dispatch(deleteMovie(id));

    const sortAlphabetically = data => {
      data.sort((a, b) => a.title < b.title ? -1 : 1);

      if (sort) {
        this.setState({ movies: data });
      } else {
        this.setState({ movies: data.reverse() });
      }
    };

    const handleSortButtonClick = () => {
      this.setState({ sort: !this.state.sort });
      sortAlphabetically(movies);
    };

    const updateData = config => {
      this.setState(config);
    };

    return (
      <div className="home">
        <div className="home__search-section">
          <SearchBar data={this.searchData} update={updateData} criteria="title" />
          <SearchBar data={this.searchData} update={updateData} criteria="stars" />
          <Button onClick={handleSortButtonClick} text="Sort by title" />
        </div>
        <div className="home__movies-list">
          {movies.map(value => {
            return (
              <div key={value._id} className="movie-wrapper">
                <div className="movie-wrapper__movie">
                  <p>{value.title}</p>
                  <p>{value.releaseYear}</p>
                  <p>{value.format}</p>
                  <p>{value.stars}</p>
                </div>
                <DeleteIcon
                  className="movie-wrapper__icon"
                  onClick={() => handleDelete(value._id)}
                />
              </div>
            );
          })}
        </div>
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
