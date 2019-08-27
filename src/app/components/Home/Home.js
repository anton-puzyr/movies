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
      movieToShow: null,
    };

    this.searchData = movies;
  }

  render() {
    const { dispatch } = this.props;
    const { movies, sort, movieToShow } = this.state;

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

    const showMovie = id => {
      const movie = movies.filter(e => e._id === id);

      this.setState({ movieToShow: movie[0] });
    };

    return (
      <div className="home">
        <div className="home__search-section">
          <SearchBar data={this.searchData} update={updateData} criteria="title" />
          <SearchBar data={this.searchData} update={updateData} criteria="stars" />
          <Button onClick={handleSortButtonClick} text="Sort by title" />
          {movieToShow &&
            <div className="movie-to-show">
              <div className="movie-to-show__title">
                <p>
                  <b>{movieToShow.title}</b>
                </p>
              </div>
              <div className="movie-to-show__title-line" />
              <p>
                <b>Release year: </b>
                {movieToShow.releaseYear}
              </p>
              <p>
                <b>Format: </b>
                {movieToShow.format}
              </p>
              <p>
                <b>Stars: </b>
                {movieToShow.stars.map(item => item.trim()).join(', ')}
              </p>
            </div>
          }
        </div>
        <div className="home__movies-list">
          {movies && movies.length ?
            movies.map(value => {
              return (
                <div key={value._id} className="movie-wrapper" onClick={() => showMovie(value._id)}>
                  <div className="movie-wrapper__movie">
                    <p>
                      <b>Title: </b>
                      {value.title}
                    </p>
                    <p>
                      <b>Release year: </b>
                      {value.releaseYear}
                    </p>
                    <p>
                      <b>Format: </b>
                      {value.format}
                    </p>
                    <p>
                      <b>Stars: </b>
                      {value.stars.map(item => item.trim()).join(', ')}
                    </p>
                  </div>
                  <DeleteIcon
                    className="movie-wrapper__icon"
                    onClick={() => handleDelete(value._id)}
                  />
                </div>
              );
            })
            :
            <div className="no-movies">
              <p>Nothing found</p>
            </div>
          }
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
