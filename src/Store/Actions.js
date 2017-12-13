import * as api from '../api';
import Types from './Types';

export function showApiError(error) {
  return { type: Types.API_ERROR, error };
};

export function createNote(text) {
  return (dispatch) => {
    return api.$post('/notes', { text })
      .then(
        note => dispatch({ type: Types.CREATE_NOTE, note }),
        err => dispatch(showApiError(err))
      );
  };
};

export function createToDo(text) {
  return (dispatch) => {
    return api.$post('/todos', { text })
      .then(
        todo => dispatch({ type: Types.CREATE_TODO, todo }),
        err => dispatch(showApiError(err))
      );
  };
};

export function deleteNote(id) {
  return (dispatch) => {
    return api.$delete(`/notes/${id}`)
      .then(
        t => dispatch({ type: Types.DELETE_NOTE, id }),
        err => dispatch(showApiError(err))
      );
  };
};

export function deleteToDo(id) {
  return (dispatch) => {
    return api.$delete(`/todos/${id}`)
      .then(
        t => dispatch({ type: Types.DELETE_TODO, id }),
        err => dispatch(showApiError(err))
      );
  };
};

export function modifyNote(note) {
  return (dispatch) => {
    return api.$put(`/notes/${note.id}`, note)
      .then(
        note => dispatch({ type: Types.MODIFY_NOTE, note }),
        err => dispatch(showApiError(err))
      );
  };
};

export function modifyToDo(todo) {
  return (dispatch) => {
    return api.$put(`/todos/${todo.id}`, todo)
      .then(
        note => dispatch({ type: Types.MODIFY_TODO, todo }),
        err => dispatch(showApiError(err))
      );
  };
};