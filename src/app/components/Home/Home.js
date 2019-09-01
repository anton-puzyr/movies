import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _uniq from 'lodash-es/uniq';

import Button from '../../shared/Button';
import SearchBar from '../SearchBar';
import DeleteIcon from '../../../assets/icons/delete-icon.svg';
import { deleteMovie } from '../../store/actions';
import Modal from '../../shared/Modal';
import './Home.scss';

const { array, func } = PropTypes;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: props.movies,
      sort: false,
      movieToShow: null,
      isModalOpen: false,
      deleteId: null,
      filters: {
        stars: '',
        title: '',
      },
    };
  }

  render() {
    const { dispatch } = this.props;
    const { movies, sort, movieToShow, isModalOpen, deleteId } = this.state;

    const handleDelete = id => dispatch(deleteMovie(id));

    const sortAlphabetically = data => {
      data.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);

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

    const updateData = (config, prop) => {
      const { filters } = config;

      this.setState(
        {
          [prop]: config.movies,
          filters: {
            ...this.state.filters,
            ...filters,
          },
        },
        () => {
          if (this.state.title && this.state.stars) {
            const filtered = _uniq(this.state.title.concat(this.state.stars)).filter(
              item =>
                item.stars.some(e => e.toLowerCase().includes(this.state.filters.stars)) &&
                item.title.toLowerCase().includes(this.state.filters.title),
            );

            this.setState({ movies: filtered });
          } else {
            this.setState({ movies: config.movies });
          }
        },
      );
    };

    const showMovie = id => {
      const movie = movies.filter(e => e._id === id);

      this.setState({ movieToShow: movie[0] });
    };

    const showModal = () => this.setState({ isModalOpen: true });

    const hideModal = () => this.setState({ isModalOpen: false });

    return (
      <div className="home">
        <Modal isModalOpen={isModalOpen} hide={hideModal} action={() => handleDelete(deleteId)}>
          <p>Are you sure you want delete this movie?</p>
        </Modal>
        <div className="home__search-section">
          <SearchBar data={movies} update={e => updateData(e, 'title')} criteria="title" />
          <SearchBar data={movies} update={e => updateData(e, 'stars')} criteria="stars" />
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
                    onClick={() => {
                      showModal();
                      this.setState({ deleteId: value._id });
                    }}
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
