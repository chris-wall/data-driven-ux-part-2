import Types from './Types';

export default function reducer(state = '', action) {
  switch(action.type) {
    case Types.API_ERROR:
      console.error(action.error);
      return `API Error: ${action.error.statusCode} - ${action.error.statusText}`;
    case Types.CREATE_NOTE:
    case Types.CREATE_TODO:
    case Types.DELETE_NOTE:
    case Types.DELETE_TODO:
    case Types.MODIFY_NOTE:
    case Types.MODIFY_TODO:
      return null;
    default:
      return state;
  }
}