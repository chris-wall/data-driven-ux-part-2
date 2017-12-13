import Types from './Types';
import { Map } from 'immutable';

export default function reducer(state = Map({}), action) {
  switch (action.type) {
    case Types.CREATE_TODO:
    case Types.MODIFY_TODO:
      return state.set(action.todo.id, action.todo);
    case Types.DELETE_TODO:
      return state.delete(action.id);
    default:
      return state;
  }
};