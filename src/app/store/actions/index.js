import axios from 'axios';

import { pending, success, failure } from './handleActions';
import { GET_ALL_MOVIES_PENDING, GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_ERROR } from '../types';

export const getAllMovies = () => dispatch => {
  dispatch(pending(GET_ALL_MOVIES_PENDING));

  return axios
    .get('http://localhost:3000/movies')
    .then(response => {
      dispatch(success(response.data, GET_ALL_MOVIES_SUCCESS));
    })
    .catch(error => {
      dispatch(failure(error, GET_ALL_MOVIES_ERROR));
    });
};
