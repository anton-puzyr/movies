import axios from 'axios';
import cogoToast from 'cogo-toast';

import { pending, success, failure } from './handleActions';
import {
  GET_ALL_MOVIES_PENDING,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_ERROR,
  IMPORT_FILE_PENDING,
  IMPORT_FILE_SUCCESS,
  IMPORT_FILE_ERROR,
  ADD_MOVIE_PENDING,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  DELETE_MOVIE_PENDING,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_ERROR,
} from '../types';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAllMovies = () => dispatch => {
  dispatch(pending(GET_ALL_MOVIES_PENDING));

  return axios
    .get('/movies')
    .then(response => {
      dispatch(success(response.data, GET_ALL_MOVIES_SUCCESS));
    })
    .catch(error => {
      dispatch(failure(error, GET_ALL_MOVIES_ERROR));
    });
};

export const addMovie = data => dispatch => {
  dispatch(pending(ADD_MOVIE_PENDING));

  return axios
    .post('/add-movie', data)
    .then(response => {
      dispatch(success(response.data, ADD_MOVIE_SUCCESS));
      cogoToast.success('Successfully added', { position: 'top-right' });
    })
    .catch(error => {
      dispatch(failure(error, ADD_MOVIE_ERROR));
      cogoToast.error('Error while adding', { position: 'top-right' });
    });
};

export const deleteMovie = id => dispatch => {
  dispatch(pending(DELETE_MOVIE_PENDING));

  return axios
    .delete(`/movies/${id}`)
    .then(response => {
      dispatch(success(response.data, DELETE_MOVIE_SUCCESS));
      cogoToast.success('Successfully deleted', { position: 'top-right' });
    })
    .catch(error => {
      dispatch(failure(error, DELETE_MOVIE_ERROR));
      cogoToast.error('Error while deleting', { position: 'top-right' });
    });
};

export const importFile = file => dispatch => {
  dispatch(pending(IMPORT_FILE_PENDING));

  return axios
    .post('/import', file)
    .then(response => {
      if (Array.isArray(response.data)) {
        dispatch(success(response.data, IMPORT_FILE_SUCCESS));
        cogoToast.success('Successfully imported', { position: 'top-right' });
      } else {
        cogoToast.warn(response.data, { position: 'top-right' });
      }
    })
    .catch(error => {
      dispatch(failure(error, IMPORT_FILE_ERROR));
      cogoToast.error('Error while importing', { position: 'top-right' });
    });
};
