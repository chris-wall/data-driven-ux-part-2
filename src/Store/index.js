import { createStore as make, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux-immutable';
import notesReducer from './notes-reducer';
import todosReducer from './todos-reducer';
import apiErrorReducer from './api-error-reducer';
import * as Actions from './Actions';

export { Actions };

export function createStore() {
  const rootReducer = combineReducers({
    notes: notesReducer,
    todos: todosReducer,
    error: apiErrorReducer
  });

  return make(
    rootReducer,
    applyMiddleware(thunk)
  );
};
