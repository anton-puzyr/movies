import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import movies from './movies.reducer';

const rootReducer = combineReducers({
  movies,
  form: formReducer,
});

export default rootReducer;
