import { combineReducers } from 'redux';
import recipients from './reducers/recipients';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  recipients,
  common,
  router: routerReducer
});