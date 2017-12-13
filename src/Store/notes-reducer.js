import Types from './Types';
import { Map } from 'immutable';

export default function reducer (state = Map({}), action) {
  switch (action.type) {
    case Types.CREATE_NOTE:
    case Types.MODIFY_NOTE:
      return state.set(action.note.id, action.note);
    case Types.DELETE_NOTE:
      return state.delete(action.id);
    default:
      return state;
  }
};