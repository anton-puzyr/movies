import axios from 'axios';

import { pending, success, failure } from './handleActions';
import { GET_ALL_MOVIES_PENDING, GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_ERROR } from '../types';

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
