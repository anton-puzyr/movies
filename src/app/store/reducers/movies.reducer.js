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
} from '../types';

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
  case IMPORT_FILE_PENDING:
    return {
      ...state,
      pending: action.pending,
    };
  case IMPORT_FILE_SUCCESS:
    return {
      ...state,
      importedFile: action.data,
      pending: action.pending,
    };
  case IMPORT_FILE_ERROR:
    return {
      error: action.error,
      pending: action.pending,
    };
  case ADD_MOVIE_PENDING:
    return {
      ...state,
      pending: action.pending,
    };
  case ADD_MOVIE_SUCCESS:
    return {
      ...state,
      movieAdded: action.data,
      pending: action.pending,
    };
  case ADD_MOVIE_ERROR:
    return {
      error: action.error,
      pending: action.pending,
    };
  default:
    return state;
  }
};

export default movies;
