import { combineReducers} from 'redux';
import { SET_CONTACTS, PICK_CONTACT } from '../actions';

function contacts(state = [], action) {
  switch(action.type) {
    case SET_CONTACTS:
      return action.contacts;
    default:
      return state;
  }
}

function contact(state = {}, action) {
  switch(action.type) {
    case PICK_CONTACT:
      return action.contact;
    default:
      return state;
  }
}

export default combineReducers({ contacts, contact });
