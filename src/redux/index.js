import { combineReducers } from 'redux'

export default combineReducers({
    contact: require('./ContactRedux').reducer,
  })
