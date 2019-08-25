import { GET_ALL_MOVIES_PENDING, GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_ERROR } from '../types';

const initialState = {
  pending: false,
  movies: [],
  error: null,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
  case GET_ALL_MOVIES_PENDING:
    return {
      ...state,
      pending: action.pending,
    };
  case GET_ALL_MOVIES_SUCCESS:
    return {
      ...state,
      movies: action.data,
      pending: action.pending,
    };
  case GET_ALL_MOVIES_ERROR:
    return {
      error: action.error,
      pending: action.pending,
    };
  default:
    return state;
  }
};

export default movies;
