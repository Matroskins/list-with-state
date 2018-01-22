import { combineReducers } from 'redux';
import listElState from './listElState';

const todoApp = combineReducers({
  listElState,
});

export default todoApp;
