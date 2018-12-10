import { combineReducers } from 'redux';
import recipients from './reducers/recipients';
import emailTemplates from './reducers/emailTemplates';
import campaigns from './reducers/campaigns';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  recipients,
  emailTemplates,
  campaigns,
  router: routerReducer
});