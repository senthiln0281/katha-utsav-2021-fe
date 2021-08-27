import helloReducer from './hello';
import IndividualRegistrationReducer from './IndividualRegistrationReducers';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
    helloReducer,
    IndividualRegistrationReducer
  });
  
  export default RootReducer;